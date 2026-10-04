export type InquiryKind = "contact" | "early-access";

/**
 * Sends a website form to the NovaDash server, which forwards it by email.
 * `website` is the honeypot field (hidden from people, filled by bots).
 */
export async function submitInquiry(kind: InquiryKind, values: Record<string, string | undefined>, website: string): Promise<void> {
  const res = await fetch("/api/public/website-inquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ kind, ...values, website }),
  });
  if (!res.ok) throw new Error(`inquiry failed: ${res.status}`);
}
