import fs from 'fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const create = async () => {
  try {
    await fs.access(join(__dirname, 'files', 'fresh.txt'));
    throw new Error('FS operation failed');
  } catch (e) {
    if (e.message !== 'FS operation failed') {
      await fs.writeFile(
        join(__dirname, 'files/fresh.txt'),
        'I am fresh and young'
      );
    } else {
      throw e;
    }
  }
};

await create();
