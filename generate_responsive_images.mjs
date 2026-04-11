import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, "public");

const targets = [
  { file: "hero-banner.webp", widths: [640, 960, 1280] },
  { file: "1.webp", widths: [480, 800, 1200] },
  { file: "2.webp", widths: [480, 800, 1200] },
  { file: "3.webp", widths: [480, 800, 1200] },
  { file: "4.webp", widths: [480, 800, 1200] },
  { file: "5.webp", widths: [480, 800, 1200] },
  { file: "6.webp", widths: [480, 800, 1200] },
  { file: "7.webp", widths: [480, 800, 1200] },
  { file: "photo_2026-04-11_18-21-32.webp", widths: [480, 800, 1200] },
  { file: "photo_2026-04-11_18-21-33.webp", widths: [480, 800, 1200] },
  { file: "photo_2026-04-11_18-21-35.webp", widths: [480, 800, 1200] },
  { file: "photo_2026-04-11_18-21-37.webp", widths: [480, 800, 1200] },
  { file: "photo_2026-04-11_18-21-38.webp", widths: [480, 800, 1200] },
  { file: "photo_2026-04-11_18-21-39.webp", widths: [480, 800, 1200] },
  { file: "photo_2026-04-11_19-11-37.webp", widths: [480, 800, 1200] },
];

const run = async () => {
  for (const target of targets) {
    const inputPath = path.join(publicDir, target.file);
    for (const width of target.widths) {
      const outName = target.file.replace(".webp", `-${width}.webp`);
      const outputPath = path.join(publicDir, outName);
      try {
        await sharp(inputPath)
          .resize(width, null, { withoutEnlargement: true })
          .webp({ quality: 75, effort: 5 })
          .toFile(outputPath);
        console.log(`Generated: ${outName}`);
      } catch (err) {
        console.error(`Error: ${outName}`, err.message ?? err);
      }
    }
  }
};

run();
