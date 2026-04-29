const exec = require('child_process').exec;
const child = exec('node src/index.js', (error, stdout, stderr) => {
  if (error) throw error;
  expect(stdout).toEqual('Hello, World!
');
});
child.stderr.on('data', (data) => console.log(`stderr: ${data}`));
child.on('close', (code) => {
  expect(code).toEqual(0);
});