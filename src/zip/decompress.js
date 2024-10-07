import fs from 'fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createUnzip } from 'node:zlib';

const __dirname = dirname(fileURLToPath(import.meta.url));

const readStream = fs.createReadStream(join(__dirname, 'files', 'archive.gz'));

const writeStream = fs.createWriteStream(
  join(__dirname, 'files', 'fileToCompress.txt')
);

const unzip = createUnzip();

const decompress = async () => {
  readStream.pipe(unzip).pipe(writeStream);
};

await decompress();
