const chai = require('chai');
const { spawn } = require('child_process');
const process = spawn('node', ['../../../src/index.js']);
process.stdout.on('data', (data) => {
  chai.expect(data.toString()).to.equal('Hello, World!
')
});
process.on('exit', (code) => {
  chai.expect(code).to.equal(0)
})
