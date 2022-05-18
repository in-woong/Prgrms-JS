import { createEl } from '../../util/createEl.js';
import { getTodo } from '../../util/fetchAPI.js';
export function Users({ $target, users }) {
  this.state = users;
  this.$uesrsContainer = createEl('div', 'users-container');
  $target.appendChild(this.$uesrsContainer);

  this.render = function () {
    this.$uesrsContainer.querySelector('.users')?.remove();

    this.$usersEl = createEl('div', 'users');
    this.$uesrsContainer.appendChild(this.$usersEl);

    const markup = this.generateUserListMarkup();
    this.$usersEl.insertAdjacentHTML('afterbegin', markup);
  };

  this.generateUserListMarkup = function () {
    return `
    <div class="users-header">
    <h2>사용자 목록</h2>
    </div>
    <div class="users-body">
        <ul class="users-list">
        ${this.state
          .map((user) => {
            return `
                <li class="users-item">
                    <div class="users-item-name">
                        <span>${user}</span>
                        </div>
                </li>
                `;
          })
          .join('')}
        </ul>
    </div>
    </div>
    `;
  };

  this.$uesrsContainer.addEventListener('click', async (e) => {
    const $span = e.target.closest('span');

    if (e.target.querySelector('.user-todo')) {
      return e.target.querySelector('.user-todo')?.remove();
    }

    if ($span !== null) {
      const $userTodoEl = createEl('ul', 'user-todo');
      const userTodo = await getTodo(e.target.childNodes[0].textContent);
      $userTodoEl.innerHTML = userTodo
        .map((todo) => {
          return this.generateUserTodoMarkup(todo);
        })
        .join('');

      e.target.appendChild($userTodoEl);
    }
  });

  this.generateUserTodoMarkup = function ({ content, isCompleted }) {
    return `
    <li>
    ${isCompleted ? `<del>${content}</del>` : content}
    </li>
    `;
  };

  this.render();
}
