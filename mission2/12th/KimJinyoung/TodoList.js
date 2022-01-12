function TodoList({ targetEl, todoData }) {
  this.todoInputBtn = document.querySelector(".todo-input--btn");

  this.data = todoData;
  try {
    if (!new.target) {
      throw new Error("님아; new 붙이고 실행점;");
    }
  } catch (e) {
    alert("Error: " + e.message);
  }

  this.dataErrorCheck = function (data) {
    try {
      if (data === null || data === undefined) {
        throw new Error("님아; 왜 암것도 안줌;");
      }
      if (!Array.isArray(data)) {
        throw new Error("님아; Array 아닌데여;");
      }
      data.forEach((todo) => {
        if (
          !("text" in todo) ||
          typeof todo.text !== "string" ||
          typeof todo.isCompleted !== "boolean"
        )
          throw new Error("님아; Array 이상함;");
      });
    } catch (e) {
      alert("Error: " + e.message);
    }
  };

  this.dataErrorCheck(this.data);

  this.render = function () {
    const todo = this.data
      .map(function (el, i) {
        if (el.isCompleted) {
          return `<li><span><s>${el.text}</s></span> <button id="${i}">X</button></li>`;
        }
        return `<li><span>${el.text}</span> <button id="${i}">X</button></li>`;
      })
      .join("");
    targetEl.innerHTML = `
    <ul>  ${todo} </ul>`;
    this.todoListTexts = document.querySelectorAll("li");
    this.todoListTexts.forEach((el) => {
      el.querySelector("span").addEventListener("click", () => {
        console.log(this.data);
        this.data[el.querySelector("button").id].isCompleted = true;
        this.render();
      });
      el.querySelector("button").addEventListener("click", () => {
        console.log(this.data);
        this.data.pop([el.querySelector("button").id]);
        this.render();
      });
    });
  };

  this.render();

  this.todoInputBtn.addEventListener("click", () => {
    this.data.push({
      text: document.querySelector("input").value,
      isCompleted: false,
    });
    console.log(this.data);

    this.render();
    document.querySelector("input").value = "";
  });
}
