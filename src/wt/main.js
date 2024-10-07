import { Worker } from 'worker_threads';
import os from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const performCalculations = async () => {
  const countCore = os.availableParallelism();

  const result = [];

  let count = 0;

  function updateResult() {
    const showResult = result
      .sort((a, b) => a.id - b.id)
      .map((el) => ({ status: el.status, data: el.data }));

    console.log(showResult);
    process.exit();
  }

  Promise.all(
    new Array(countCore).fill().map((el, i) => {
      return new Promise((resolve, rejects) => {
        const worker = new Worker(join(__dirname, 'worker.js'), {
          workerData: { num: i + 10, id: i },
        });
        worker.on('online', () => resolve(worker));
        worker.on('message', (a) => {
          result.push({ ...a, status: 'resolved' });
          count += 1;
          if (count === countCore) {
            updateResult();
          }
        });
        worker.on('error', () => {
          result.push({
            id: i,
            status: 'error',
            data: null,
          });
          count += 1;
          if (count === countCore) {
            updateResult();
          }
        });
      });
    })
  );
};

await performCalculations();
