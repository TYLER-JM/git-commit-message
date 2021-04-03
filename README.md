## GCM

- a small script using node's child_process to make a git commit message that is automatically prefixed with the name of the current branch, when using `git` from the command line.

#### Install

The package is indended to be installed globally using `npm install -g git-commit-message`

#### Usage

The `gcm` command requires a message passed as a string, to be used as your commit message. For example:

`$ gcm "my next commit message"`

...If you were on a branch called `hotfix/bug-fix`, GCM would write a commit message like this:

```
hotfix/bug-fix
my next commit message
```


#### Stretch
- allow for configuration of the prefix message