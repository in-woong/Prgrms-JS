import { todoCountTemplate } from './template.js';

export  default class TodoCount {
  constructor({$target}){
    this.$target = $target;
  }
  render({todoCount, completedCount }){
    this.$target.innerHTML = todoCountTemplate(todoCount, completedCount);
  }
}
