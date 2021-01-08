# Вклад в Monopoly

[:us: / :uk: version](./CONTRIBUTING-EN.md)

👍🎉 Прежде всего, спасибо, что нашел время внести свой вклад! 🎉👍

Содержание

[Где я могу брать задачи?](#Где-я-могу-брать-задачи?)

[Styleguides](#Styleguides)

- [Git Commit Messages](#Git-Commit-Messages)
- [JavaScript Styleguide](#JavaScript-Styleguide)

### Где я могу брать задачи?

Ты можешь взять любую задачу из issues которая ни на кого не назначена и не имеет тега `in progress`.

Когда ты решаешь взять задачу пожалуйста перед этим отпиши в коментарии к ней что ты хочешь ей заняться, я зайду и проставлю тег `in progress` что бы не было таких ситуаций когда нам прилетают два PR к одной задаче.

## Styleguides

### Git Commit Messages

- Используй настоящее время ("add object", а не "added object").

- В начеле коммита указывай его тип:

  - `bugfix` - баг фикс
  - `fix` - незначительный фикс чего-либо
  - `feat` - фича
  - `refactor` - рефакторинг
  - `docs` - документация

- Примеры:
  - `bugfix: reconnect after refresh`
  - `fix: style button roll-dice`
  - `feat: create order move players`
  - `refactor: reorganize server/index.ts`
  - `docs: update readme`

### JavaScript Styleguide

Весь JavaScript отформатирован с Prettier.

- Не используй `export default` по мере возможности

  ```js
  // Use this:
  export class ClassName {}

  // Instead of:
  export default class ClassName {}
  ```

- Все файлы и папки именнуй в `kebab-case`
