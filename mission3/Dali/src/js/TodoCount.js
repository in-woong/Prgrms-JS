import { todoCountTemplate } from './template.js';

export  default class TodoCount {
  constructor({$target}){
    this.$target = $target;
    this.render();
  }
  render(todoCount){
    this.$target.innerHTML = todoCountTemplate(todoCount);
  }
}
