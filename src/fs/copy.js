import fs from 'fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const copy = async () => {
  try {
    await fs.access(join(__dirname, 'files'));
  } catch (e) {
    throw new Error('FS operation failed');
  }
  try {
    await fs.access(join(__dirname, 'files_copy'));
    throw new Error('FS operation failed');
  } catch (e) {
    if (e.message !== 'FS operation failed') {
      await fs.cp(join(__dirname, 'files'), join(__dirname, 'files_copy'), {
        recursive: true,
      });
    } else {
      throw e;
    }
  }
};

await copy();
