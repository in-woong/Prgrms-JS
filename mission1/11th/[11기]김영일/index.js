function TodoList($app, data) {
  if(!new.target) throw new Error("new 키워드를 추가해주세요");
  if(!$app) throw new Error("$app이 올바르지 않습니다.");
  if(!validationCheck(data)) throw new Error("데이터 형식을 올바르게 넣어주세요");

  this.$target = document.createElement("div");
  this.$target.className = "todo-lists";
  $app.appendChild(this.$target);
  
  this.state = data;
  this.render = () => {
    const htmlString = this.state.map(({text, isCompleted}) => {
      return isCompleted ? `<li><s>${text}</s></li>` : `<li>${text}</li>`
    }).join("");

    this.$target.innerHTML = `<ul>${htmlString}</ul>`;
  }

  this.setState = (nextState) => {
    if(!validationCheck(nextState)) throw new Error("데이터 형식을 올바르게 넣어주세요");
        this.state = nextState;
        this.render();
  }

  this.todoInput = (event) => {
      if(event.key === "Enter") {
        todoList.setState([...this.state, {
          text: `${event.target.value}`,
          isCompleted: false,
        }])
        todoInput.value = ""; //UX를 위한 인풋값 초기화
      }
  }
}

const validationCheck = (data) => {
  if(!data) {
    throw new Error("데이터가 없습니다.");
  } else if (!Array.isArray(data)){
    throw new Error("데이터 타입이 Array가 아닙니다.");
  }
  data.forEach((data) => {
    if(typeof(data) === undefined) {
      throw new Error("데이터 형식이 잘못 되었습니다.");
    } else if(typeof(data.text) !== "string") {
      throw new Error("데이터 타입이 string이 아닙니다.")
    } else if (typeof(data.isCompleted) !== "boolean") {
      throw new Error("데이터 타입이 boolean이 아닙니다.")
    }
  })
  return true;
}




let data = [
  {
    text: "JS 학습하기1",
    isCompleted: true
  },
  {
    text: "JS 복습하기1",
    isCompleted: false
  }
];

const todoInput = document.querySelector("#todo-input");
const $app = document.querySelector("#app")
let todoList = new TodoList($app,data);

todoList.render();

setTimeout(()=> {
  todoList.setState([
    ...todoList.state,
    {
        text: 'setState',
        isCompleted: true,
    }
  ])
}, 2000);

todoInput.addEventListener("keypress",todoList.todoInput);