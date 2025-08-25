// src/components/Chat/sanitize.ts
import DOMPurify from "dompurify";

export function sanitizeHTML(html: string) {
  return DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });
}
