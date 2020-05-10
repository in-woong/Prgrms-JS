function TodoList($target, data) {
  this.$target = $target;
  this.todoData = data;

  if (isEmpty(this.todoData)) {
    throw new Error('데이터가 올바르지 않습니다.');
  }
  if (!new.target) {
    throw new Error('TodoList를 new로 사용해야 합니다.');
  }

  $target.addEventListener('click', (event) => {
    const isRemoveButton = event.target.name === 'remove';
    const isStrike = event.target.nodeName === 'STRIKE';

    if (isStrike) {
      return false;
    }

    if (isRemoveButton) { // 삭제
      data.splice(event.target.parentNode.getAttribute('data-id'), 1);
    } else { // 완료
      const todoIndex = isStrike ?
      event.target.parentNode.getAttribute('data-id') :
      event.target.getAttribute('data-id');
      this.todoData[todoIndex].isCompleted = !this.todoData[todoIndex].isCompleted;
    }

    this.setState(data);
  });

  this.render = () => {
    this.$target.innerHTML = `<ul>${this.todoData.map(({text, isCompleted}, index) => {
      if (!isEmpty(isCompleted) && text) {
        return `<li data-id="${index}" class="pointer">
            ${isCompleted ? `<strike>(완료) ${text}</strike>` : text }
            <button name="remove">삭제</button>
          </li>`;
      }
    }).join('')}</ul>`;
  };

  this.setState = (nextData) => {
    this.todoData = nextData;
    this.render();
  };

  this.render();
}
