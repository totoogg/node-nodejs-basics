import crypto from 'crypto';
import { createReadStream } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const hash = crypto.createHash('sha256');

const calculateHash = async () => {
  const readableStream = createReadStream(
    join(__dirname, 'files/fileToCalculateHashFor.txt')
  );
  readableStream.on('readable', () => {
    const data = readableStream.read();
    if (data) {
      hash.update(data);
    } else {
      console.log(hash.digest('hex'));
    }
  });
};

await calculateHash();
