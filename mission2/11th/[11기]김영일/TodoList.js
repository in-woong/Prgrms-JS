function TodoList($app, data) {
  if(!new.target) throw new Error("new 키워드를 추가해주세요");
  // if(!app) throw new Error("app이 올바르지 않습니다.");
  if(!validationCheck(data)) throw new Error("데이터 형식을 올바르게 넣어주세요");
  const app = $app;

  this.$target = document.createElement("div");
  this.$target.className = "todo-lists";
  app.appendChild(this.$target);
  
  this.state = data;
  this.render = () => {
    const htmlString = this.state.map(({text, isCompleted}) => {
      return isCompleted ? `<li><s>${text}</s></li>` : `<li data-list="${text}">${text}</li>`
    }).join("");

    this.$target.innerHTML = `<ul>${htmlString}</ul>`;
  }

  this.setState = (nextState) => {
    if(!validationCheck(nextState)) throw new Error("데이터 형식을 올바르게 넣어주세요");
        this.state = nextState;
        this.render();
  }
  const todoDelete = document.querySelector("#delete-button");
  todoDelete.addEventListener("click", () => {
    const deletedState = [];
    this.state.map(({isCompleted},index) => {
      if(!isCompleted) deletedState.push(this.state[index]);
    })
    this.state = deletedState;
    this.render();
  });

  this.$target.addEventListener("click", (event) => {
    const checkTarget = event.target.dataset.list;
    this.state.forEach((data) => {
      if(data.text === checkTarget) {
        data.isCompleted = true;
      }
      this.render();
    })
  });

  this.render();
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
