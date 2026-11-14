# Project image sources

- `knect/cover.webp` combines existing Flutter screenshots from `Desktop/kerjancok/kerjancok-mobile/.agents/tasks/mobile-visual-system/`. Knect displays only this hero image. Its sample employee records are identified as demo data on the portfolio.
- `taskflow/weekly.webp` and `taskflow/workload.webp` use the screenshots supplied by the user: `Screenshot 2026-11-14 151906.png` and `Screenshot 2026-11-14 151927.png`, respectively, from `Pictures/Screenshots`. Both retain their full 1920 by 1200 dimensions without cropping and replace the earlier logo-only cover. The screenshots open at full size from the project page.
- `galaxy-pos/servis-sparepart-added.webp` comes from `Desktop/galaxy-pos/docs/qa/screenshots/servis-sparepart/` and shows a demo repair job.
- `galaxy-pos/nota-kecil.webp` is rendered from the actual `Desktop/galaxy-pos/resources/views/penjualan/nota_kecil.blade.php` template using explicitly labeled demo sale data. Dompdf renders the receipt at thermal-paper width; the rendered page is rasterized and converted to WebP. It replaces the large service invoice in the gallery.
- `satria-gear/logo-cover.webp` uses the original white logo from `Desktop/sg-id/public/sg.png`, resized proportionally and centered on a dark background. It replaces the stock tournament photograph. A distinct filename prevents reuse of the older image's cached URL.
