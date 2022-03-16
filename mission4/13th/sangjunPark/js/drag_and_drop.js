// '드래그 & 드롭'을 시작하는 함수
export function dragAndDropStart(event) {
  if (event.target.nodeName !== 'LI') return
  event.dataTransfer.setData('text/plain', event.target.id)
  event.dataTransfer.dropEffect = 'move'
}

// '드래그 & 드롭'을 진행하는 함수
export function dragAndDropInProgress(event) {
  event.preventDefault()
  event.dataTransfer.dropEffect = 'move'
}

// '드래그 & 드롭'을 끝내는 함수
export function dragAndDropEndAndReturnTargetIdx(event, todoListArray) {
  event.preventDefault()

  const targetId = event.dataTransfer.getData('text/plain')
  const targetIdx = todoListArray.findIndex(
    (element) => element._id === targetId
  )
  const targetDroppable = event.target.parentElement

  if (
    event.target.parentElement.id === 'not-completed-todo-list' ||
    event.target.parentElement.id === 'completed-todo-list'
  )
    targetDroppable.appendChild(document.getElementById(targetId))

  return targetIdx
}
