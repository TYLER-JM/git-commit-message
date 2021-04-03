## GCM

- a small script using node's child_process to make a git commit message that is automatically prefixed with the name of the current branch.

#### Install

The package is indended to be installed globally using `npm install -g git-commit-message`

#### Usage

`$ gcm "my next commit message"`

If you were on a branch called `hotfix/bug-fix`, this would write a commit message like this:

```
hotfix/bug-fix
my next commit message
```


#### Stretch
- allow for configuration of the prefix message