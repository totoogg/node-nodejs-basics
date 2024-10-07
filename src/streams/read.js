import fs from 'fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { stdout } from 'node:process';

const __dirname = dirname(fileURLToPath(import.meta.url));

const readableStream = fs.createReadStream(
  join(__dirname, 'files', 'fileToRead.txt'),
  'utf-8'
);

let data = '';

const read = async () => {
  readableStream.on('data', (chunk) => (data += chunk));
  readableStream.on('end', () => stdout.write(data + '\n'));
};

await read();
