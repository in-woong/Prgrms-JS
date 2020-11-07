/**
 * validate data
 * @param {Array} data
 */
const checkData = (data) => {
  if(!data) {
    throw new Error('TypeError: null or undefined has no properties');
  }
  if(!Array.isArray(data)) {
    throw new Error('TypeError: data is not iterable');
  }
  data.forEach(item => {
    if(!item.text) {
      throw new Error('ReferenceError: item.text is not defined');
    }
    if(typeof item.text !== 'string') {
      throw new Error('TypeError: item.text is not string');
    }
    if(!item.hasOwnProperty('isCompleted')) {
      throw new Error('ReferenceError: item.isCompleted is not defined');
    }
    if(typeof item.isCompleted !== 'boolean') {
      throw new Error('TypeError: item.isCompleted is not boolean');
    }
  })
}

/**
 *
 * @param {string} id
 * @param {Array} data
 */
export default function TodoList(id, data) {
  // 파라메터로 받은 data this.data에 할당
  this.id = id;
  this.data = data;
  this.targetId = null;
  this.targetElement = document.querySelector(`#${this.id}`);
  // new 키워드 안 붙이고 함수 실행 시 에러 처리
  if (!new.target) {
    throw new Error('not called with new');
  }

  // click 이벤트 등록
  this.targetElement.addEventListener("click", (event) => {
    if (event.target.id.indexOf("todo-item") > -1 || event.target.id.indexOf("done-item") > -1) {
      this.data = this.data.map((item, index) => {
        return (parseInt(event.target.id.split("-")[2]) === index) ? {
          text: item.text,
          isCompleted: !item.isCompleted
        } : item;
      })
      this.render();
    }
    if (event.target.id.indexOf("remove-item") > -1) {
      this.data = this.data.filter((item, index) => parseInt(event.target.id.split("-")[2]) !== index)
      this.render();
    }
  });
  // submit 이벤트 등록
  this.targetElement.addEventListener('submit', (event) => {
    event.preventDefault();
    this.data = [...this.data, {
      text: document.getElementById("todo-list-input").value,
      isCompleted: false
    }];
    this.render();
  })

  /**
   * update TodoList to nextData
   * @param {Array} nextData
   */
  this.setState = (nextData) => {
    this.data = [...this.data, ...nextData];
    this.render();
  }

  /**
   * create TodoList
   */
  this.render = () => {
    // 데이터 검증
    checkData(this.data);

    // todo-input
    const todoInput = `
    <form>
        <label for="todo-list-input">${this.id}: </label>
        <span class="todo">
            <input type="text" name="todo" id="todo-list-input" placeholder="할 일을 입력하세요."/>
            <button type="reset">✕</button>
        </span>
        <button type="submit">Submit</button>
    </form>`;

    // todo-list
    const todoList = `<ul>${this.data.map(({ text, isCompleted }, index) =>
      `<li>
        <span id="todo-item-${index}"> ${isCompleted ? `✔<del id="done-item-${index}">${text}</del>` : text}</span>
        <button type="button" id="remove-item-${index}">✕</button>
      <li>`
    )
      .join('')}</ul>`;

    // todo-input, todo-list 생성
    this.targetElement.innerHTML = todoInput + todoList;
    // todo-input 포커스
    document.querySelector(`#${this.id}-input`)
      .focus();
  }

  this.render();
}
