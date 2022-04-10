export default function TodoCount($target, todoListData) {
  // new keyword 동반하여 호출했는지 체크
  if (!(this instanceof TodoCount)) {
    throw new Error(
      '[without new keyword error]: new 키워드를 사용해 호출해 주세요'
    );
  }

  // target 유효성 체크
  if ($target === null) {
    throw new Error(
      '[target error]: 올바른 DOM target 을 인자로 전달해 주세요'
    );
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
