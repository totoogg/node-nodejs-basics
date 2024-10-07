import { Transform } from 'stream';
import { stdin, stdout } from 'node:process';

const reverseStream = new Transform({
  transform(chunk, encoding, cb) {
    const arr = chunk.toString().split('');
    const last = arr.pop();
    const reversed = arr.reverse().concat(last).join('');
    cb(null, reversed);
  },
});

const transform = async () => {
  stdin.pipe(reverseStream).pipe(stdout);
};

await transform();
