import fs from 'fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { stdin } from 'node:process';

const __dirname = dirname(fileURLToPath(import.meta.url));

const writeStream = fs.createWriteStream(
  join(__dirname, 'files', 'fileToWrite.txt')
);

const write = async () => {
  stdin.pipe(writeStream);
};

await write();
