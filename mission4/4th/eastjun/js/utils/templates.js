const errorAlertTemplate = (errorMessage) => `<h1>${errorMessage}</h1>`

const todoItemTemplate = (todoItem) => `
    <li data-id="${todoItem._id}" class="${todoItem.isCompleted ? 'completed' : ''}">
      <div class="view">
          <input class="toggle" type="checkbox" ${todoItem.isCompleted ? 'checked' : ''}>
          <label class="label">${todoItem.content}</label>
          <button class="delete"></button>
      </div>
    </li>`

const userTabTemplate = (user, isDefaultUser) => `
    <button data-username="${user.name}" class="ripple ${isDefaultUser ? 'active' : ''}">${user.name}</button>    
    `

const userTitleTemplate = (username) => `
    <span><strong>${username}</strong>'s Todo List</span>
  `

const loadingSkeletonTemplate = () => `
     <li>
        <div class="view">
            <label class="label">
                <div class="animated-background">
                    <div class="skel-mask-container">
                        <div class="skel-mask"></div>
                    </div>
                </div>
            </label>
        </div>
     </li>`

export {
  errorAlertTemplate,
  todoItemTemplate,
  userTabTemplate,
  userTitleTemplate,
  loadingSkeletonTemplate,
}
