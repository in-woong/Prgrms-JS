const TodoCount = function ({$target, initialState}) {
  const $div = document.createElement('div');
  $div.className = 'todo-list__todo-count';

  this.state = initialState;

  this.render = () => {
    const totalTodoCount = this.state.length;
    const completedTodoCount = this.state.filter((todo) => todo.isCompleted).length;
  
    if (totalTodoCount === ZERO) {
      $div.innerHTML = `🛌 해야 할 일이 없습니다. 잠시 휴식을 취해보는 건 어떨까요? 🛌`;
    } else if (totalTodoCount !== ZERO && totalTodoCount === completedTodoCount) {
      $div.innerHTML = `🎉 해야 할 일을 다 하셨습니다. 수고하셨어요! 🎉`;
    } else {
      $div.innerHTML = `🔥 <b>${totalTodoCount}개</b> 중 <b>${completedTodoCount}개</b>를 완료하였습니다. 조금만 더 힘내요! 🔥`;
    }
    $target.appendChild($div);
  }

  this.setState = (nextState) => {
    this.state = nextState;

    LocalStorage.set('todos', nextState);
    this.render();
  }

  this.render();
}
