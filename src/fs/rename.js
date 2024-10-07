import fs from 'fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const rename = async () => {
  try {
    await fs.access(join(__dirname, 'files', 'wrongFilename.txt'));
  } catch (e) {
    throw new Error('FS operation failed');
  }
  try {
    await fs.access(join(__dirname, 'files', 'properFilename.md'));
    throw new Error('FS operation failed');
  } catch (e) {
    if (e.message !== 'FS operation failed') {
      await fs.rename(
        join(__dirname, 'files', 'wrongFilename.txt'),
        join(__dirname, 'files', 'properFilename.md')
      );
    } else {
      throw e;
    }
  }
};

await rename();
