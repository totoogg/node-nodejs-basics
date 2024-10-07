import fs from 'fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const remove = async () => {
  try {
    await fs.access(join(__dirname, 'files', 'fileToRemove.txt'));
    await fs.rm(join(__dirname, 'files', 'fileToRemove.txt'));
  } catch (e) {
    throw new Error('FS operation failed');
  }
};

await remove();
