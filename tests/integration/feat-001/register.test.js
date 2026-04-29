const chai = require('chai');
const { execSync } = require('child_process');
const output = execSync('node ../../../src/index.js').toString();
chai.expect(output).to.equal('Hello, World!
')