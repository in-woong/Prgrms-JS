import { $, ERROR_MSSAGE, isValueAvailable } from './utils.js'
import { todoNodeTemplate } from "./DOM.js"

export default class TodoList {
  constructor(initState, $target) {
    this.state = initState
    this.target = $("#" + $target + "-list")
    if (this.state != null){
      this.check(this.state)
      this.render()
    }
    this.target.addEventListener("click", this.removeNode);
  }

  check = (data) => {
    if (!Array.isArray(data)) throw new Error(ERROR_MSSAGE.DATA_IS_NOT_ARRAY)
    data.forEach((val) => {
      if (val.constructor !== Object) throw new Error(ERROR_MSSAGE.VALUE_IS_NOT_OBJECT)
      if (isValueAvailable(val.text)) throw new Error(ERROR_MSSAGE.TEXT_UNDEFINED)
    })
  }

  render = () => {
    let title = this.target.id.toUpperCase();
    this.target.innerHTML = this.state.map(({ text, isCompleted }, index) => todoNodeTemplate(index, isCompleted, text)).join('')
    this.target.innerHTML = `<h2>${title}</h2>` + this.target.innerHTML;
  }

  setState = (newData) => {
    this.target.innerHTML = ''
    this.check(newData)
    this.state = newData
    this.render()
  }

  removeNode = ({ target }) => {
    if (target.tagName == "INPUT"){
      const text = target.parentNode.textContent.trim();
      if (confirm(`정말 "${text}" 를 삭제하시겠습니까?`)){
        const classNum = target.parentNode.className;
        const parent = target.parentNode.parentNode;
        parent.removeChild(target.parentNode);
        console.log(classNum, this.state)
        this.state.splice(classNum, 1);
        console.log(classNum, this.state)
      }
    }
  }
}
