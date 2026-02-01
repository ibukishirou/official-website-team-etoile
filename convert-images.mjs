import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join } from 'path';

const inputDir = './public/images';
const imageFiles = await readdir(inputDir);

for (const file of imageFiles) {
  if (file.match(/\.(jpg|jpeg|png)$/i)) {
    const inputPath = join(inputDir, file);
    const outputPath = join(inputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
    
    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(outputPath);
    
    console.log(`Converted: ${file} -> ${outputPath}`);
  }
}

console.log('All images converted to WebP!');
