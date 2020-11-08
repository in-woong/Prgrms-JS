import { useNewKeyword, useArrayState, checkTarget, checkTypes } from '../validator/validation.js'
import { convertBoolean } from '../util/util.js'
function TodoList(data, targetId) {
    this.data = data;
    this.targetId = targetId;
    this.validate = (data) => {
        useNewKeyword(this);
        useArrayState(data);
        checkTarget(this.targetId);
        checkTypes(
            data,
            ({ text, isCompleted }) =>
              typeof text === 'string' && typeof isCompleted === 'boolean'
          );
    };
    this.render = () => {
      const contents =
        '<ul>' +
        this.data
          .map((todo, index) => {
            const delBtnHtml = `<button class="deleteBtn" type="button" data-index=${index}> 삭제 </button>`;
            const liHtml = `<li class="todoLi" data-completed=${todo.isCompleted} data-index=${index}>`;
            return `${liHtml}` 
                + (todo.isCompleted ? `<s> ${todo.text} </s>` : `${todo.text}`) 
                + `${delBtnHtml}</li>`;
          })
          .join('') +
        '</ul>';
  
      document.querySelector(`#${targetId}`).innerHTML = contents;
    };
    this.setState = (nextData) => {
      this.validate(nextData);
      this.data = nextData;
      this.render();
      this.setEvent();
    };

    this.setEvent = () => {
        // 삭제 버튼에 대한 이벤트 설정
        const deleteBtnItems = document.querySelectorAll('.deleteBtn');
        deleteBtnItems.forEach((target) => {
            target.addEventListener('click', (event) => {
                // 상위로 이벤트 전파를 막기위해 사용 (버튼 클릭하였을때)
                event.stopPropagation();
                const currentTarget = event.currentTarget;
                const index = currentTarget.dataset.index;
                const items = this.data;

                items.splice(index,1);
                this.setState(items);
            })
        });

        // Todo text에 대한 이벤트 설정
        const todoLiItems = document.querySelectorAll('.todoLi');
        todoLiItems.forEach((target) => {
            target.addEventListener('click', (event) => {
                // 상위로 이벤트 전파를 막기위해 사용 (li 클릭하였을때)
                event.stopPropagation();
                const currentTarget = event.currentTarget;
                const index = currentTarget.dataset.index;
                const isCompleted = convertBoolean(currentTarget.dataset.completed);
                const items = this.data;
                
                if(items[index]) {
                    if(isCompleted) {
                        items[index] = {text : items[index].text , isCompleted : false};
                    } else {
                        items[index] = {text : items[index].text , isCompleted : true};
                    }
                    this.setState(items);
                }

            })
        });
    };
    this.setState(data);
  }
  
  export default TodoList
