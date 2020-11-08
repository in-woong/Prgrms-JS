import  TodoList  from './TodoList.js'
import  TodoInput  from './TodoInput.js'
import  TodoCount  from './TodoCount.js'

export default function App(data) {
  this.data = data
  const targetEl = document.querySelector("#app")
  const todoInput = new TodoInput(targetEl);
  const todoList = new TodoList(targetEl, this.data);
  const todoCount =new TodoCount(targetEl, this.data);

  // submit 이벤트 등록
  targetEl.addEventListener('submit', (e) => {
    e.preventDefault();
    this.data.push({
      text: todoInput.getState(),
      isCompleted: false
    })
    todoInput.setState(null);

    todoList.setState(this.data)
    todoCount.setState(this.data)
    window.localStorage.setItem("todoList", JSON.stringify(this.data))
  })

  // click 이벤트 등록
  targetEl.addEventListener("click", (e) => {
    if (e.target.id.indexOf("todo-item") > -1 || e.target.id.indexOf("done-item") > -1) {
      this.data = this.data.map((item, index) => {
        return (parseInt(e.target.id.split("-")[2]) === index) ? {
          text: item.text,
          isCompleted: !item.isCompleted
        } : item;
      })
      todoList.setState(this.data)
      todoCount.setState(this.data)
      window.localStorage.setItem("todoList", JSON.stringify(this.data))
    }
    if (e.target.id.indexOf("remove-item") > -1) {
      this.data = this.data.filter((item, index) => parseInt(e.target.id.split("-")[2]) !== index)
      todoList.setState(this.data)
      todoCount.setState(this.data)
      window.localStorage.setItem("todoList", JSON.stringify(this.data))
    }
    if (e.target.id === "removeAll") {
      targetEl.dispatchEvent(event)
    }

  });

  // 커스텀 이벤트 등록
  const event = new CustomEvent("removeAll", { data: this.data });
  targetEl.addEventListener('removeAll', (e) => {
    this.data = []
    todoList.setState(this.data)
    todoCount.setState(this.data)
    window.localStorage.setItem("todoList", JSON.stringify(this.data))
  })
}
