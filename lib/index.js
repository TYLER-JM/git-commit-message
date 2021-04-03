const { exec } = require('child_process');

module.exports = (message) => {
  let branch = '';
  try {
    message = message.trim();
    if (message.length === 0) throw 'please include a commit message';
  } catch (error) {
    console.log('please include a commit message');
  }
  exec('git branch --show-current', (error, stdout, stderr) => {
    if (error) {
      console.log(stderr);
    }
    if (typeof stdout === 'string') {
      branch = stdout.trim()
      exec(`git commit -m "${branch}\n${message}"`);
    }
  });
}