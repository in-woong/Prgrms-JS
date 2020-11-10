import TodoList from "./TodoList.js";
import TodoInput from "./TodoInput.js";
import TodoCount from "./TodoCount.js";
import { validateData } from "../scripts/validate-data.js";

export default function App(data, $listElement, $inputElement, $countElement) {
  this.data = data;

  this.add = (newData) => {
    validateData(newData);

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

  this.reset = () => {
    this.todoListComponent.render();
    this.todoInputComponent.render();
    this.todoCountComponent.render(this.data);
  };

  this.todoListComponent = new TodoList(data, $listElement, this.remove, this.complete);
  this.todoInputComponent = new TodoInput($inputElement, this.add);
  this.todoCountComponent = new TodoCount(this.data, $countElement);
}
