import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directories = [
    path.join(__dirname, 'public/images'),
    path.join(__dirname, 'public')
];

directories.forEach(directoryPath => {
    // Ensure output directory exists (optional, but good practice if we were writing elsewhere)
    if (!fs.existsSync(directoryPath)) {
        console.error("Directory not found:", directoryPath);
        return;
    }

    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }

        files.forEach((file) => {
            const ext = path.extname(file).toLowerCase();
            if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.webp') {
                const inputFile = path.join(directoryPath, file);
                const outputExt = '.webp';
                const outputFile = path.join(directoryPath, path.basename(file, ext) + outputExt);
                const isRootPublic = path.dirname(inputFile).endsWith('public');
                const writeInPlace = inputFile === outputFile;
                const tempFile = writeInPlace ? path.join(directoryPath, `${path.basename(file, ext)}.tmp${outputExt}`) : outputFile;

                console.log(`Processing: ${file}`);

                sharp(inputFile)
                    .resize(isRootPublic ? 1600 : 400, null, {
                        withoutEnlargement: true
                    })
                    .webp({ quality: 75, effort: 5 })
                    .toFile(tempFile)
                    .then(info => {
                        if (writeInPlace) {
                            fs.renameSync(tempFile, outputFile);
                        }
                        console.log(`Optimized: ${file} -> ${path.basename(file, ext)}.webp (${info.size} bytes)`);
                    })
                    .catch(err => {
                        console.error(`Error processing ${file}:`, err);
                    });
            }
        });
    });
});
