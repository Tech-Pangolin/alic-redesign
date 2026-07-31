import { google } from "googleapis";

export type ContactSubmission = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function getPrivateKey(): string {
  const key = process.env.GOOGLE_PRIVATE_KEY;
  if (!key) {
    throw new Error("GOOGLE_PRIVATE_KEY is not configured.");
  }
  return key.replace(/\\n/g, "\n");
}

export async function appendContactRow(submission: ContactSubmission) {
  const primarySheetId = process.env.GOOGLE_SHEET_ID;
  const secondarySheetId = process.env.GOOGLE_SECONDARY_SHEET_ID;
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;

  if (!primarySheetId) {
    throw new Error("GOOGLE_SHEET_ID is not configured.");
  }
  if (!secondarySheetId) {
    throw new Error("GOOGLE_SECONDARY_SHEET_ID is not configured.");
  }
  if (primarySheetId === secondarySheetId) {
    throw new Error(
      "GOOGLE_SHEET_ID and GOOGLE_SECONDARY_SHEET_ID must be different.",
    );
  }
  if (!clientEmail) {
    throw new Error("GOOGLE_SERVICE_ACCOUNT_EMAIL is not configured.");
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: getPrivateKey(),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const values = [
    [
      submission.name,
      submission.email,
      submission.subject,
      submission.message,
    ],
  ];

  await Promise.all(
    [primarySheetId, secondarySheetId].map((spreadsheetId) =>
      sheets.spreadsheets.values.append({
        spreadsheetId,
        range: "A:D",
        valueInputOption: "USER_ENTERED",
        requestBody: { values },
      }),
    ),
  );
}
