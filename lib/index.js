const { exec } = require('child_process');
const message = process.argv[2].trim();

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