const { exec } = require('child_process');

module.exports = (message) => {
  let branch = '';
  exec('git branch --show-current', (error, stdout, stderr) => {
    if (error) {
      //handle error
    }
    if (typeof stdout === 'string') {
      branch = stdout.trim()
      exec(`git commit -m "${branch}\n${message}"`);
    }
  });
}