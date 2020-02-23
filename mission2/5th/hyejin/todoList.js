function TodoList($target, data) {
  this.$target = $target
  this.data = data

  if (!(this instanceof TodoList)) throw new Error('new로 생성 후 사용해야 함')

  this.validate = function(data) {
    if (data === null || data === undefined)
      throw new Error('null or undefined')
    if (data.every(t => t.text === undefined))
      throw new Error('data에는 text가 있어야 함')
    if (!Array.isArray(data)) throw new Error('not Array')
  }

  this.render = function() {
    this.validate(data)

    this.$target.innerHTML = this.data
      .map(
        todo => `<div class="todos" data-id=${todo.id}> 
                    ${
                      todo.isCompleted
                        ? `<s data-id=${todo.id}>${todo.text}</s>`
                        : todo.text
                    }
                    <button class="todoDelete" value=${todo.id}>del</button>
                    </div>`
      )
      .join('')
  }

  this.setState = function(nextData) {
    this.data = nextData
    this.render()
  }

  this.render()
}
