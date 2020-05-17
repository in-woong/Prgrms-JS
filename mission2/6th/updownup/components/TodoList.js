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
    
    if (event.target.className === 'delete-btn') {  // 삭제 처리 - 클릭한 인자의 id요소 1개 삭제
      data.splice(event.target.parentNode.getAttribute('data-id'), 1)
    } else if (event.target.dataset.id) { // 완료
      const todoIndex = event.target.dataset.id
      data[todoIndex].isCompleted = !data[todoIndex].isCompleted
    }
    this.updateTodoList(data)
  })

  this.setState = (nextData) => {
    data = nextData
    this.render()
  }

  this.render = () => {
    this.data = this.checkParams(data)

    this.$target.innerHTML = `<ul>${data.map(({text, isCompleted}, index) => 
          `<li data-id=${index}>
            ${isCompleted ? '<s>' + text + '</s>' : text }
            <button class="delete-btn">삭제</button>
            </li>`
          ).join('')}
        </ul>`
  }
}

export default TodoList
