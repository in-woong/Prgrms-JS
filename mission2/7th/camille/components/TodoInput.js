/**
 * TodoInput component
 * @constructor
 */
const TodoInput = function() {
  this.init()
}

/**
 * @type {{init(): void, $textBox: HTMLElement}}
 */
TodoInput.prototype = {
  todos: null,
  $textBox: null,
  $btnAdd: null,

  setVars() {
    this.todos = []
    this.$textBox = document.getElementById('textbox-todo')
    this.$btnAdd = document.getElementById('btn-add')
  },

  registerEvent() {
    // Add button event
    this.$btnAdd.addEventListener('click', () => {
      this.addTodoList()
    })

    // Enter key event
    this.$textBox.addEventListener('keypress', (event) => {
      if (event.key === 'Enter' || event.code === 'Enter') {
        event.preventDefault()
        this.addTodoList()
      }
    })
  },

  init() {
    // console.log('TodoInput init')
    this.setVars()
    this.registerEvent()
    this.focusTextbox()
  },

  addTodoList() {
    // Add todoList
    if (this.$textBox.value.length > 0) {
      app.setAddData(this.$textBox.value)
      this.$textBox.value = ''
    } else {
      alert('내용을 입력하시오, 휴먼.')
    }
  },
  focusTextbox() {
    this.$textBox.focus()
  },
}
