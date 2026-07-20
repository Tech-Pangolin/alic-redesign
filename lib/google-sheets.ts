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
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;

  if (!sheetId) {
    throw new Error("GOOGLE_SHEET_ID is not configured.");
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

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: "A:D",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          submission.name,
          submission.email,
          submission.subject,
          submission.message,
        ],
      ],
    },
  });
}
