import errorMessages from '../errorMessages';

export default function TodoCount($target, todoListData) {
  // new keyword 동반하여 호출했는지 체크
  if (!new.target) {
    throw new Error(errorMessages.WITHOUT_NEW);
  }

  // target 유효성 체크
  if ($target === null) {
    throw new Error(errorMessages.DOM_TARGET_ERROR);
  }

  this.$todoCountContainer = document.createElement('div');
  $target.appendChild(this.$todoCountContainer);

  this.setState = function (nextData) {
    this.render(nextData);
  };

  this.render = function (todoListData) {
    const totalCount = todoListData.length;
    const completedCount = todoListData.filter(
      (todoItem) => todoItem.isCompleted
    ).length;

    this.$todoCountContainer.innerHTML = `
      <p>총 Todo 개수: ${totalCount}</p>
      <p>완료 Todo 개수: ${completedCount}</p>
    `;
  };

  this.render(todoListData);
}
