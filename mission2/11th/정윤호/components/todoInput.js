import { $ } from '../utils/dom.js'
import todoInputTemplate from '../layouts/todoInputTemplate.js'

export default class TodoInput {
  constructor($target) {
    this.$todoInput = $target
    this.$todoInput.addEventListener('keyup', this.onKeyUpListener)
    this.$todoInput.addEventListener('click', this.onClick)
  }

  render() {
    this.$todoInput.innerHTML = todoInputTemplate()

    this.$todoInputText = $('.todo-input_text')
    this.$todoInputSubmit = $('.todo-input_submit')
    this.$todoInputSubmit = $('.todo-input_list-clear')
    // 위 3개 프로퍼티 (이하 this.$todoInputText로 대표해서 말하겠음)
    // this.$todoInputText 프로퍼티는 TodoInput 클래스 내부 전체에서 사용하기 위함인데 위치가 애매한것 같다.
    // 클래스 내부 전체에서 사용하는 프로퍼티는 constructor에 모여서 작성하던 버릇이 있어서 그런지
    // this.$todoInputText 프로퍼티도 constructor에 있으면 좋겠다는 생각이든다.
    // 위와 같은 방식을 사용하면 렌더할 때 마다 쓸대없이 계속 프로퍼티 초기화하는 과정이 발생하여 비효율적이라고 생각한다.
    // 만약 html파일에 마크업이 되어있었다면 constructor에서 프로퍼티를 지정할 수 있지만
    // 렌더를 해야지 마크업이 되는 방식이라 이렇게 작성하게 되었다. 근본적으로 해결할 수 있는 방법을 생각해봐야겠다.
    // 다른 방안으로 this.$todoInputText 프로퍼티가 필요한 메서드에서 단순하게
    // const $todoInputText = $('.todo-input_text') 방식으로 정의해서 사용해보는것도 방법이 될 수 있을 것같다.
    // 하지만 TodoInput 클래스에서 자식요소를 완전하게 알고있고 컨트롤할수 있는 의미로써 this.$todoInputText로 사용하는게 좋을것같다..
  }

  onKeyUpListener = ({ target, key }) => {
    if (key !== 'Enter' || this.$todoInputText.value.trim() === '') return
    this.addTodoItem && this.addTodoItem(target)
    this.clear()
  }

  setAddTodoItem(addTodoItem) {
    this.addTodoItem = addTodoItem
  }

  setClearTodoList(clearTodoList) {
    this.clearTodoList = clearTodoList
  }

  onClick = ({ target }) => {
    if (!target.matches('.todo-input_submit') && !target.matches('.todo-input_list-clear')) return
    console.log('TodoInput - onClick')
    if (target.matches('.todo-input_submit')) {
      this.addTodoItem && this.addTodoItem(this.$todoInputText)
      this.clear()
      return
    }
    if (target.matches('.todo-input_list-clear')) {
      console.log('list-clear')
      this.clearTodoList && this.clearTodoList()
      return
    }
  }

  clear() {
    this.$todoInputText.value = ''
  }
}
