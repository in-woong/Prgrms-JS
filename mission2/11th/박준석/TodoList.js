import { $, ERROR_MSSAGE, isValueAvailable } from './utils.js'
import { todoNodeTemplate } from "./DOM.js"

export default class TodoList {
  constructor($app, initState, $target, renewList) {
    this.app = $app;
    this.state = initState
    this.target = $target
    this.renewList = renewList;

    if (this.state != null){
      this.isUsableData(this.state)
      this.render()
    }
    this.app.addEventListener("click", this.removeNode);
    this.app.addEventListener("click", this.checkNode);
  }

  isUsableData = (data) => {
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
    this.isUsableData(newData)
    this.state = newData
    this.render()
  }

  removeNode = ({ target }) => {
    if (target.classList.contains("rm-btn")){
      const text = target.parentNode.textContent.trim();
      if (confirm(`정말 "${text}" 를 삭제하시겠습니까?`)){
        const classNum = target.parentNode.className;
        const parent = target.parentNode.parentNode;
        parent.removeChild(target.parentNode);
        this.state.splice(classNum, 1);
      }
      this.renewList(this.state);
    }
  }

  checkNode = ({ target }) => {
    if (target.tagName == "SPAN"){
      const classNum = target.parentNode.className;
      if (!target.parentNode.style.textDecoration){
        target.parentNode.style.textDecoration = "line-through";
        this.state[classNum].isCompleted = true;
      }
      else{
        target.parentNode.style.textDecoration = "";
        this.state[classNum].isCompleted = false;
      }
      this.renewList(this.state);
    }
  }
}
