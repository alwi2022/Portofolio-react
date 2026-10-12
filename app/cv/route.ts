import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

// Serves the CV PDF at a clean, stable URL (/cv) in both dev and production.
// A static segment like `app/cv` takes precedence over the catch-all
// `app/[[...path]]`, so this never falls through to the 404 page.
const CV_FILE = 'fullstack-cv-imambahrialwi.pdf';

export const dynamic = 'force-static';

export async function GET() {
  const data = await readFile(join(process.cwd(), 'public', CV_FILE));
  return new Response(new Uint8Array(data), {
    headers: {
      'Content-Type': 'application/pdf',
      // `inline` opens the PDF in the browser tab; use `attachment` to force a download.
      'Content-Disposition': `inline; filename="${CV_FILE}"`,
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
