# Contributing to Monopoly

👍🎉 First of all, thank you for taking the time to contribute! 🎉👍

Contents

[Where can I get the tasks?](#Where-can-I-get-the-tasks)

[Styleguides](#Styleguides)

- [Git Commit Messages](#Git-Commit-Messages)
- [JavaScript Styleguide](#JavaScript-Styleguide)

## Where can I get the tasks?

One may take any task from the unassigned issues without `in progress` tag.

If you wish to take the task, leave a comment so we could add `in progress` tag.
This will help to prevent having multiple Pull Requests for one issue.

## Styleguides

### Git Commit Messages

- Use present tense ("add object" instead of "added object").
- Specify the commit type:
  - `bugfix` - bug fix
  - `fix` - a small fix
  - `feat` - feature
  - `test` - writing tests
  - `refactor` - refactoring
  - `docs` - documentation
- Examples:
  - `bugfix: reconnect after refresh`
  - `fix: style button roll-dice`
  - `feat: create order move players`
  - `test: add test buyCompany`
  - `refactor: reorganize server/index.ts`
  - `docs: update readme`

### JavaScript Styleguide

All of the JavaScript code is formatted using Prettier.

- Do **not** use `export default` if possible

  ```js
  // Use this:
  export class ClassName {}

  // Instead of:
  export default class ClassName {}
  ```

- All of the files and folders should be named in `kebab-case`
