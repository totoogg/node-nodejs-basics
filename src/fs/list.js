import fs from 'fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const list = async () => {
  try {
    await fs.access(join(__dirname, 'files'));
    console.log(await fs.readdir(join(__dirname, 'files')));
  } catch (e) {
    throw new Error('FS operation failed');
  }
};

await list();
