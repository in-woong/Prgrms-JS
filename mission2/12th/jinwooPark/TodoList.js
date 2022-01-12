export default class TodoList {

  $target
  props;
  constructor(target, props) {
    this.$target = target;
    this.props = props;
    this.render();
  }

  // validation은 어디에서 할지 고민중
  checkType(value) {
    if (value === null || value === undefined) {
      throw new Error('null 또는 undefined 값입니다.');
    }

    if (!Array.isArray(value)) {
      throw new Error('배열 형태의 데이터가 아닙니다.');
    }
  }

  checkData(value) {
    value.forEach((item) => {
      if(item === null || undefined) {
        throw new Error('올바른 데이터의 형태가 아닙니다.')
      }
      if (!item.hasOwnProperty('text') || !item.hasOwnProperty('isCompleted')) {
        throw new Error('key값이 올바르지 않습니다.');
      }

      if (typeof item.text !== 'string' || typeof item.isCompleted !== 'boolean') {
        throw new Error('올바른 타입값이 아닙니다.');
      }
    })
  }

  validate(value){
    this.checkType(value);
    this.checkData(value);
  }

  setEvent(){
    const $todoItems = this.$target.querySelector(".todo-list");
    $todoItems.addEventListener("click",(e) => {
      if(e.target.nodeName === "BUTTON"){
        this.props.deleteTodo(e.target.closest(".todo-item").dataset.id);
      }else if(e.target.nodeName === "S" || e.target.nodeName === "DIV" || e.target.nodeName === "LI") {
        this.props.completeTodo(e.target.closest(".todo-item").dataset.id);
      }
    })
  }

  //list 하나하나도 나중에 컴포넌트화 시킬 예정.
  render() {
    const template = this.props.todoList.reduce((prev, cur) => {
      if (cur.isCompleted) {
        prev += `<li data-id="${cur.id}" class='todo-item'>
                    <div class='todo-text'><s>${cur.text}</s></div>
                    <button class='todo-delete'>삭제</button>
                  </li>`;
      } else {
        prev += `<li data-id="${cur.id}" class='todo-item'>
                    <div class='todo-text'>${cur.text}</div>
                    <button class='todo-delete'>삭제</button>
                  </li>`;
      }
      return prev;
    },"")

    this.$target.innerHTML = `<ul class='todo-list'>${template}</ul>`;
    this.setEvent();
  }
}
