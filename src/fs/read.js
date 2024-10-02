import fs from 'fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
  try {
    await fs.access(join(__dirname, 'files/fileToRead.txt'));
    console.log(
      await fs.readFile(join(__dirname, 'files/fileToRead.txt'), {
        encoding: 'utf8',
      })
    );
  } catch (e) {
    throw new Error('FS operation failed');
  }
};

await read();
