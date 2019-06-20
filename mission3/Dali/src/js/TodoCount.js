import { todoCountTemplate } from './template.js';

export  default class TodoCount {
  constructor({$target}){
    this.$target = $target;
    this.data = {
      todoCount: 0,
      completed: 0,
    };
    this.render();
  }
  setState(data) {
    this.data = data;
    this.render();
  }
  render(todoCount){
    this.$target.innerHTML = todoCountTemplate(todoCount);
  }
}
