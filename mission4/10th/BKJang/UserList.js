import { checkUseNewKeyword, checkDataValidation } from './validationUtil.js';

function UserList(targetElement, initialData, setSpecificUser) {
  if (checkUseNewKeyword(new.target)) {
    this.target = targetElement;
    this.data = initialData;
  }

  this.render = function () {
    const usersHTML = this.data.map(user => {
      const userText = user.isSelected ? `${user.name} (선택됨)` : user.name;
      return `<li data-item-id=${user.name} class="todo-item">
      ${userText}
      </li>`
    }).join('');

    this.target.innerHTML =
      `<ul>
        ${usersHTML}
      </ul>`;
  }

  this.setState = function(nextData) {
    this.data = nextData;
    this.render();
  }

  this.target.addEventListener('click', function(e) {
    const userId = e.target.getAttribute('data-item-id');
    const nodeName = e.target.nodeName;

    if (nodeName === 'LI') {
      setSpecificUser(userId);
    }
  });

  checkDataValidation(this.data);
  this.render();
};

export default UserList;
