export default class TodoCount{
  constructor(){
    this.numOfTodo = 0;
    this.numOfCompleted = 0;
  }
  prerender(target){
    this.countTag = target.appendChild(document.createElement('div'))
    this.countTag.id = 'todo-count'
    this.todoCntTag = this.countTag.appendChild(document.createElement('div'))
    this.completedCntTag = this.countTag.appendChild(document.createElement('div'))
  }

  render(){
    this.todoCntTag.innerHTML =`총 Todo의 개수: ${this.countTodo()}` 
    this.completedCntTag.innerHTML = `완료한 Todo의 개수: ${this.countCompleted()}`
  }

  countTodo(){
    return document.getElementById('todo-list').getElementsByTagName('li').length
  }

  countCompleted(){
    return document.getElementById('todo-list').getElementsByTagName('s').length
  }
}

