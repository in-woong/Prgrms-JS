import TodoList from "./TodoList.js";
import TodoInput from "./TodoInput.js";
import TodoCount from "./TodoCount.js";
import TodoError from "./TodoError.js";

export default function App(data, $listElement, $inputElement, $countElement, $errorElement) {
  this.data = data;
  this.errorMsg = { view: true, text: "" };

  this.add = (newData) => {
    this.data.push({
      text: newData,
      isCompleted: false
    });

    this.reset();
  };

  this.remove = (idx) => {
    this.data.splice(idx, 1);
    this.reset();
  };

  this.complete = (idx) => {
    this.data[idx].isCompleted = !this.data[idx].isCompleted;
    this.reset();
  };

  this.resetErrorMsg = (msg) => {
    this.errorMsg.text = msg;
    this.todoErrorComponent.render();
  };

  this.reset = () => {
    this.todoListComponent.render();
    this.todoCountComponent.render();
    this.todoInputComponent.resetValue();
    this.resetErrorMsg("");
  };

  this.todoListComponent = new TodoList(data, $listElement, this.remove, this.complete);
  this.todoInputComponent = new TodoInput($inputElement, this.add, this.resetErrorMsg);
  this.todoCountComponent = new TodoCount(data, $countElement);
  this.todoErrorComponent = new TodoError(this.errorMsg, $errorElement);
}
