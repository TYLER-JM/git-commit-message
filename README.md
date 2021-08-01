## GCM

- a small script using node's child_process to make a git commit message that is automatically prefixed with the name of the current branch, when using `git` from the command line.

#### Install

The package is indended to be installed globally. It is published on NPM as [git-commit-message](https://www.npmjs.com/package/git-commit-message). install with `npm install -g git-commit-message`

#### Usage

The `gcm` command requires a message passed as a string, to be used as your commit message. For example:

`$ gcm "my next commit message"`

...If you were on a branch called `hotfix/bug-fix`, GCM would write a commit message like this:

```
hotfix/bug-fix
my next commit message
```


#### questions or concerns

- If you would like to use the package but run into errors while trying to install or use it, let me know. I'd like to know how to improve the package
