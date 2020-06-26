function TodoCount($target, data, countData) {
  this.todoData = data;

  if (!new.target) {
    throw new Error('TodoCount를 new로 사용해야 합니다.');
  }

  $target.insertAdjacentHTML('afterend', `<section>
      <input type="checkbox" checked disabled>
      <span id="todo-count-group">${countData.todoCompletedCount} / ${countData.todoCount}</span>
    </section>`);

  this.render = () => {
    const $todoCountGroup = document.querySelector('#todo-count-group');
    $todoCountGroup.innerHTML = `${countData.todoCompletedCount} / ${countData.todoCount}`;
  }

  this.setState = newData => {
    this.todoData = newData;
    this.render();
  }

  this.render();
}

export default TodoCount;
