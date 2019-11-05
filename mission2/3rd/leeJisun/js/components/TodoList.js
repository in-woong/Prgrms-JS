import { deleteData, onComplete } from '../actions'

export function TodoList(data) {
  // 타입 & 에러 체크
  if (typeof data !== 'object' || !this instanceof TodoList)
    throw new Error('error message')

  this.setState = nextData => {
    data = nextData
    render()
    addDeleteEvent()
    addCompleteEvent()
  }

  // HTML에 컴포넌트를 그려주는 함수
  const render = () => {
    // console.log('list render')
    // list item 컴포넌트
    const listItem = data
      .map((data, index) => {
        if (data.isCompleted)
          return `<li class="list"><p class="todo-txt" data-id=${index}><strike>${index +
            1}. ${
            data.text
          }</strike></p><button class="btn-delete" data-id=${index}>삭제</button></li>`
        return `<li class="list"><p class="todo-txt" data-id=${index}>${index +
          1}. ${
          data.text
        }</p><button class="btn-delete" data-id=${index}>삭제</button></li>`
      })
      .join('')
    document.getElementById('todo-list').innerHTML = listItem
  }
  // delete 버튼에 클릭이벤트 새로 달기
  const addDeleteEvent = () => {
    document.querySelectorAll('.btn-delete').forEach((item, index) => {
      item.addEventListener('click', () => {
        deleteData(index, data)
      })
    })
  }
  // todo 텍스트에 클릭이벤트 새로 달기
  const addCompleteEvent = () => {
    document.querySelectorAll('.todo-txt').forEach((item, index) => {
      item.addEventListener('click', () => {
        onComplete(index, data)
      })
    })
  }
}
