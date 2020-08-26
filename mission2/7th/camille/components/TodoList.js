/**
 * TodoList component
 * @param todoListData
 * @param todoListContainerId
 * @constructor
 */
const TodoList = function(todoListData, todoListContainerId) {
  // Check constructor new keyword
  if (!this instanceof TodoList) {
    throw new Error('Check your class instance')
  }
  this.init(todoListData, todoListContainerId)
}
/**
 *
 */
TodoList.prototype = {
  todos: null,
  $listContainerId: null,
  $listContainer: null,
  $ul: null,
  $btnDeleteAll: null,
  isFirstData: null,
  currentId: null,
  removeAllEvent: null,

  setVars(todoListData, todoListContainerId) {
    this.todos = todoListData
    this.$listContainerId = todoListContainerId
    this.$listContainer = document.getElementById(todoListContainerId)
    this.$listContainer.appendChild(document.createElement('UL'))
    this.$ul = document.querySelector('#' + this.$listContainerId + ' ul')
    this.$btnDeleteAll = document.getElementById('btn-delete-all')
    this.isFirstData = true
    this.removeAllEvent = new Event('removeAll')
  },

  registerEvent() {
    // Delete button event handler
    this.$listContainer.addEventListener('click', ({target}) => {
      const targetTagName = target.tagName

      // Apply event handler when clicked only button, li, del tag
      if (targetTagName !== 'BUTTON' && targetTagName !== 'LI' && targetTagName !== 'DEL') return

      // Delete event
      if (targetTagName === 'BUTTON') {
        this.currentId = this.getCurrentId(target)
        app.deleteCurrentData(this.currentId)
      }

      // isComplete
      if (targetTagName === 'LI' || targetTagName === 'DEL') {
        this.nCurrentId = this.getCurrentId(target)
        app.setCheckTodoList(this.nCurrentId)
      }
    })

    // Delete all button
    this.$btnDeleteAll.addEventListener('click', (e) => {
      this.isFirstData = true
      this.$btnDeleteAll.dispatchEvent(this.removeAllEvent)
    })
  },

  init(todoListData, todoListContainerId) {
    // console.log('TodoList init')
    this.setVars(todoListData, todoListContainerId)
    this.registerEvent()
    this.render()
  },

  render() {
    if (this.todos && this.todos.length > 0) {
      const template = this.todos.map((v) => {
        if (v.isComplete) {
          return `<li class="id_${v.id}"><del>${v.text}</del></li>`
        }

        if (v.text.length <= 0) {
          this.isFirstData = true
          return '<p>-</p>' // 빈 데이터 시 추가 ui
        }

        return `<li class="id_${v.id}">${v.text} <button>삭제</button></li>`
      }).join('')
      if (this.isFirstData) { // 처음 할 일 추가 시 기존 빈 ui 삭제
        this.cleanListContainer()
        this.isFirstData = false
      }
      this.$ul.innerHTML = template
      this.$listContainer.appendChild(this.$ul)
    } else {
      this.$listContainer.innerHTML = '<p>-</p>' // 빈 데이터 시 추가 ui
    }
  },
  setState(nextData) {
    if (!validateData(nextData)) {
      this.todos = nextData
    }
    this.render()
  },

  getCurrentId(eventTarget) {
    // Return index from clicked button's parent node classname which contains current index
    switch (eventTarget.tagName) {
      case 'BUTTON':
      case 'DEL':
        return eventTarget.parentNode.className.split('id_')[1]
        break
      case 'LI':
        return Number(eventTarget.className.split('id_')[1])
        break
      default:
        return
    }
  },

  cleanListContainer() {
    this.$listContainer.innerHTML = ''
  },
}
