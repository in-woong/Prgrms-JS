import { useArrayState, checkTarget, checkTypes } from '../validator/validation.js'
import { convertStringToBoolean, jsonStringify } from '../util/util.js'
import { TODO_STORAGE_KEY } from '../data/constant.js'
function TodoList(data, countTodoItem, targetId) {
    this.data = data;
    this.targetId = targetId;
    this.validate = (data) => {
        if (new.target !== TodoList) {
          throw new Error('new 키워드로 함수의 인스턴스를 생성해야 합니다.')
        }
        useArrayState(data);
        checkTarget(this.targetId);
        checkTypes(
            data,
            ({ text, isCompleted }) =>
              typeof text === 'string' && typeof isCompleted === 'boolean'
          );
    };
    this.render = () => {
      const todoListStringHtml = '<ul id="todoUl">' +
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
  
      document.querySelector(`#${targetId}`).innerHTML = todoListStringHtml;
    };
    this.setState = (nextData) => {
      this.validate(nextData);
      this.data = nextData;
      countTodoItem(this.data);
      this.render();
      this.setEvent();
    };

    this.setEvent = () => {
        // 이벤트 위임 : 요소마다 이벤트 핸들러를 할당하지 않고, 요소들의 공통 조상에 이벤트 핸들러를 할당하여 관리.
        const todoUl = document.querySelector('#todoUl');

        todoUl.addEventListener('click', (event) => {
          const target = event.target;
          const todoLi = target.closest('li'); // closest : selector와 일치하는 가장 근접한 상위요소 반환
          const todoDelBtn = target.closest('button');
          const index = todoLi.dataset.index;
          const isCompleted = convertStringToBoolean(todoLi.dataset.completed);
          const items = this.data;
          
          if(todoLi && items[index]) {
            if(isCompleted) {
                items[index] = {text : items[index].text , isCompleted : false};
            } else {
                items[index] = {text : items[index].text , isCompleted : true};
            }
          }

          if(todoDelBtn) {
            items.splice(index,1);
          }
          localStorage.setItem(TODO_STORAGE_KEY, jsonStringify(items));
          this.setState(items);
        });
    };
    
    this.setState(data);
  }
  
  export default TodoList
