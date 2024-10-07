import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (args) => {
  const cp = spawn(`node ${join(__dirname, 'files', 'script.js')}`, args, {
    stdio: 'inherit',
    shell: true,
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['Argument1', 'Argument2']);
