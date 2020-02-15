function TodoList(data, targetId) {
  if(!new.target) {
    throw new Error("new 생성자로 함수를 호출하세요.");
  }

  try{
    isValidData(data);
    isValidTargetId(targetId);

    this.data = data;
    this.targetId = targetId;

    this.render = function() {
      if(this.data.length === 0) {
        document.querySelector(`#${this.targetId}`).innerHTML =
          "할 일을 입력하세요!";
        return;
      }
      
      document.querySelector(`#${this.targetId}`).innerHTML = this.data
        .map(
          (item) => 
          `<div>
          ${item.isCompleted
          ? `<s>${item.text}</s>` 
          : item.text}
          <button class="todo-delete-button" value=${item.id}>삭제</button>
          </div>`)
        .join('');

      const $deleteButtons = document.querySelectorAll('.todo-delete-button');
      $deleteButtons.forEach(button => {
        button.addEventListener(
          'click', e => this.deleteTodo(e.target.value)
        );
      });
    }
  
    this.deleteTodo = function(todoId) {
      const nextData = this.data.filter(item => item.id !== todoId );
      this.setState(nextData);  
    }

    this.setState = function(nextData) {
      isValidData(nextData);
      this.data = nextData;
      this.render();
    }

    this.render();
  }catch(e) {
    console.log(e.message);
  }
} 
