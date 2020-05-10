function TodoList($target, data) {
  this.$target = $target

  if(!new.target) {
    throw new Error('new로 TodoList를 생성하지 않음!')
  }

  this.checkParams = function (data) {
    if (!data) {
      throw new Error('data value is not available')
    }
    if (!Array.isArray(data)) {
      throw new Error('data type is not available')
    }
  }

  this.render = function () {
    this.data = this.checkParams(data)

    this.$target.innerHTML = `<ul>${data.map(({text, isCompleted}, index) => 
          `<li data-id=${index}>
            ${isCompleted ? '<s>' + text + '</s>' : text }
            <button name="remove">삭제</button>
           </li>`
          ).join('')}
        </ul>`
    }

    // 삭제 
    this.$target.addEventListener('click', function(event) {
      const isRemoveBtn = event.target.name === 'remove'
      const isStrike = event.target.nodeName === 'strike'

      if(isStrike){
        return false
      }

      if (isRemoveBtn) {
        // 삭제 처리 - 클릭한 인자의 id요소 1개 삭제
        data.splice(event.target.parentNode.getAttribute('data-id'), 1)
      } else {
        // 완료 처리
        const todoIndex = isStrike ? event.target.parentNode.getAttribute('data-id') : event.target.getAttribute('data-id')
        console.log('data[todoIndex].isCompleted :', data[todoIndex].isCompleted)
        // data[todoIndex].isCompleted = !data[todoIndex].isCompleted // 에러가 발생하여 주석처리 해놓음
      }
      
      const updateTodo = new TodoList($target, data)
      updateTodo.setState(data)
    })

    this.setState = function (nextData) {
      const nextTodo = new TodoList($target, nextData)
      nextTodo.render()
    }
}
