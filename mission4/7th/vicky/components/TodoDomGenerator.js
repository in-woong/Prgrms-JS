function TodoDomGenerator(elementDom) {
  if (!(this instanceof TodoDomGenerator)) {
    throw new Error('error: TodoDomGenerator must be called with new!')
  }

  this.render = () => {
    const listDom = document.querySelector('.todoList')
    const newDom = `
      <h1>${this.userName}님의 리스트입니다.</h1>
      <h3>+</h3>
      <input type="text" name="addList" placeholder="add List" required />
      <button type="text" name="deleteAllList">모두 삭제</button>
      <p>완료된 리스트의 갯수는 <strong class="completedTotalNumber"></strong>개입니다.</p>
    `
    listDom.innerHTML = newDom
  }

  this.setState = (userName) => {
    this.userName = userName
    this.render()
  }

  this.init = () => {
    this.elementDom = elementDom
    const listDom = document.createElement('div')
    listDom.className = 'todoList'
    listDom.innerHTML =
      '<h1>이름을 선택해주세요 :)</h1><div class="dragBox"></div>'
    this.elementDom.appendChild(listDom)
  }

  this.init()
}
export default TodoDomGenerator
