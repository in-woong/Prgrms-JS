import { fetchUserNamesFromAPI } from './api.js'

export default function Users() {
  const usersListElement = document.querySelector('#users-list')
  const renderSelectedUserElement = document.querySelector('#selected-user')

  // 전체 유저에 대한 버튼을 랜더링
  this.renderAllUsersBtns = async function () {
    const usersListArray = await fetchUserNamesFromAPI()

    usersListArray.map((user) => {
      const userLi = document.createElement('li')
      userLi.innerHTML = `<button id=${user}>${user}님의 할 일 목록</button>`
      usersListElement.appendChild(userLi)
    })
  }

  // 선택된 유저에 대한 정보를 랜더링
  this.renderSelectedUser = async function (userName, userTodoList) {
    renderSelectedUserElement.innerHTML = `
    ${userName}님에 대한 할 일 목록은 다음과 같습니다:
    <ul>
    ${userTodoList
      .map(
        (todo) =>
          `<li>
          ${todo.content}${todo.isCompleted ? '(완료)' : ''}
        </li>`
      )
      .join('')}
    </ul>
    `
  }
}
