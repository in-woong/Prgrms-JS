const validateData = (data) => {
  if (!data) {
    throw new Error('data가 정상이 아닙니다.')
  }

  const isValidData = data.every((todo) => typeof todo.text === 'string')

  if (!isValidData) {
    throw new Error('data의 text가 string이 아닙니다.')
  }
}

export default function TodoList($target, data, todoListSelector, handlerToggleCompleted) {
  this.$target = $target
  this.data = data
  this.$todoList = $target.querySelector(todoListSelector)
  this.handlerToggleCompleted = handlerToggleCompleted

  this.validation = (state) => {
    if(!new.target) {
      throw new Error('new 키워드는 필수입니다.')
    }

    validateData(this.data)
  }

  this.render = () => {
    this.$todoList.innerHTML = this.data.map(({ id, text, isCompleted }) => 
                              isCompleted ? 
                              `<li id="${id}" class="item-todo"><input type="checkbox" class="checkbox-todo" checked><span>${text}</span></li>`
                              :`<li id="${id}" class="item-todo"><input type="checkbox" class="checkbox-todo"><span>${text}</span></li>`
                              ).join('')
  }
  
  this.setState = (nextState) => {
    validateData(nextState)
    this.data = nextState
    this.render()
  }
  
  this.eventToggleCompleted = () => {
		this.$todoList.addEventListener('click', e => {
      if(e.target.className === "checkbox-todo") {
				const liItemId = parseInt(e.target.parentNode.id)
        this.handlerToggleCompleted(liItemId)
			}
		})
	}

  this.validation()
  this.render()
  this.eventToggleCompleted()
}