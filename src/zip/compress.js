import fs from 'fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createGzip } from 'node:zlib';

const __dirname = dirname(fileURLToPath(import.meta.url));

const readStream = fs.createReadStream(
  join(__dirname, 'files/fileToCompress.txt'),
  'utf-8'
);

const writeStream = fs.createWriteStream(join(__dirname, 'files/archive.gz'));

const gzip = createGzip();

const compress = async () => {
  readStream.pipe(gzip).pipe(writeStream);
};

await compress();
