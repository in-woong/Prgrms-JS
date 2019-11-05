import { setData } from './data'
import { TodoList } from './components/TodoList'
import { TodoCount } from './components/TodoCount'

// add
export const addData = (data, list) => {
  // check null
  if (data.length === 0) {
    alert('input 값이 비어있습니다')
    return
  }

  let item = {
    text: data,
    isCompleted: false,
  }

  list.push(item)
  setData(list)
  rerender(list)
}

// delete
export const deleteData = (index, list) => {
  let _list = getList(list)
  _list.splice(index, 1)
  setData(_list)
  rerender(_list)
}

// onComplete
export const onComplete = (index, list) => {
  let _list = getList(list)
  _list[index].isCompleted = !_list[index].isCompleted
  setData(list)
  rerender(list)
}

// rerender
const rerender = data => {
  const todoList = new TodoList(data)
  todoList.setState(data)

  const todoCount = new TodoCount(data)
  todoCount.setState(data)
}

// getList
const getList = list => {
  let _list = []
  list.map(data => {
    _list.push(data)
  })
  return _list
}
