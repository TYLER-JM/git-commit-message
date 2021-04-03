const { exec } = require('child_process');

module.exports = (message) => {
  let branch = '';
  try {
    if (!message && message.length === 0) throw new Error('please include a commit message!!');
    message = message.trim();
  } catch (error) {
    console.log(error.message);
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