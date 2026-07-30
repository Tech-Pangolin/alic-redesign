/** Contact API URL. On Hostinger static builds, set NEXT_PUBLIC_CONTACT_API_URL to your Vercel API. */
export function getContactApiUrl(): string {
  return (
    process.env.NEXT_PUBLIC_CONTACT_API_URL?.trim() || "/api/contact"
  );
}
