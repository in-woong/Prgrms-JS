function TodoList(props) {
  this.$target = props.$target
  let data = props.data
  this.updateTodoList = props.updateTodoList

  if(!new.target) {
    throw new Error('new로 TodoList를 생성하지 않음!')
  }

  this.checkParams = (data) => {
    if (!data) {
      throw new Error('data value is not available')
    }
    if (!Array.isArray(data)) {
      throw new Error('data type is not available')
    }
  }
  
  this.$target.addEventListener('click', (event) => {
    const isDeleteBtn = event.target.className === 'delete-btn'
    const isDeleteNode = event.target.nodeName === 'S';
    
    if (isDeleteBtn) {  // 삭제 처리 - 클릭한 인자의 id요소 1개 삭제
      data.splice(event.target.parentNode.getAttribute('data-id'), 1)
    } else { // 완료
      const todoIndex = isDeleteNode ?
        event.target.parentNode.getAttribute('data-id') : 
        event.target.getAttribute('data-id')
      data[todoIndex].isCompleted = !data[todoIndex].isCompleted
    }
    this.updateTodoList(data)
  })

  this.render = () => {
    this.data = this.checkParams(data)

    this.$target.innerHTML = `<ul>${data.map(({text, isCompleted}, index) => 
          `<li data-id=${index} class="pointer">
            ${isCompleted ? '<s>' + text + '</s>' : text }
            <button class="delete-btn">삭제</button>
            </li>`
          ).join('')}
        </ul>`
  }

  // 새로고침 후 데이터를 불러오지 않는 이슈
  this.setState = (nextData) => {
    data = nextData
    this.render()
  }

}

export default TodoList
