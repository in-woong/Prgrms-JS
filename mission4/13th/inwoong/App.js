import * as todoRepository from './api.js'
import UserGroup from './UserGroup.js'
import TodoCount from './TodoCount.js'
import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'

export default function App({
  $target,
  initialState,
  initialUsername,
  userList,
}) {
  this.state = initialState
  this.username = initialUsername
  this.userList = userList
  this.$target = $target
  this.isLoading = false

  const onSubmit = async (text) => {
    try {
      await todoRepository.add(this.username, text)
      this.setState()
    } catch (e) {
      alert(e.message)
    }
  }

  const onToggleCompleted = async (targetId) => {
    console.log('Toggle', targetId)
    try {
      await todoRepository.toggle(this.username, targetId)
      this.setState()
    } catch (e) {
      alert(e.message)
    }
  }

  const onDelete = async (id) => {
    try {
      await todoRepository.remove(this.username, id)
      this.setState()
    } catch (e) {
      alert(e.message)
    }
  }

  const onDeleteAll = async () => {
    try {
      await todoRepository.removeAll(this.username)
      this.setState()
    } catch (e) {
      alert(e.message)
    }
  }

  const onChangeUser = (user) => {
    this.username = user
    this.setState()
  }

  const handleDragStart = (id, isCompleted, e) => {
    e.dataTransfer.setData('target.id', id)
    e.dataTransfer.setData('target.isCompleted', isCompleted)
  }
  const handleDragEnd = async (willBeCompleted, e) => {
    const targetId = e.dataTransfer.getData('target.id')
    const targetCompleted = e.dataTransfer.getData('target.isCompleted')
    if (targetCompleted !== willBeCompleted) {
      try {
        await todoRepository.toggle(this.username, targetId)
        this.setState()
      } catch (e) {
        alert(e.message)
      }
    }
  }
  this.render = () => {
    console.log('App Render')

    this.userGroup = new UserGroup({
      $target: this.$target,
      user: this.username,
      userList: this.userList,
      onChangeUser,
    })
    this.todoInput = new TodoInput({
      $target: this.$target,
      onSubmit,
      onDeleteAll,
    })
    this.todoCount = new TodoCount({
      $target: this.$target,
      initialState: this.state,
    })
    this.completeTodoList = new TodoList({
      $target: this.$target,
      initialState: this.state,
      onToggleCompleted,
      onDelete,
      isCompleted: true,
      handleDragStart,
      handleDragEnd,
    })
    this.incompleteTodoList = new TodoList({
      $target: this.$target,
      initialState: this.state,
      onToggleCompleted,
      onDelete,
      isCompleted: false,
      handleDragStart,
      handleDragEnd,
    })
  }

  this.setState = async () => {
    console.log('App SetState')

    try {
      this.isLoading = true
      this.completeTodoList.setState(this.state, this.isLoading)
      this.incompleteTodoList.setState(this.state, this.isLoading)
      this.state = await todoRepository.getTodo(this.username)
    } catch (e) {
      alert(e.message)
    } finally {
      this.isLoading = false
      this.completeTodoList.setState(this.state)
      this.incompleteTodoList.setState(this.state)
      this.todoCount.setState(this.state)
      this.userGroup.setState(this.username)
    }
  }
  this.render()
}
