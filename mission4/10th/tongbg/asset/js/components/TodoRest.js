import { isNew } from '../common/validateData.js'

function TodoRest({ $interfaceDOM, onClickReset }) {
  if (isNew(new.target)) {
    const $removeAllBtnDOM = document.createElement('div')
    $removeAllBtnDOM.id = 'todo-removeAll'
    $removeAllBtnDOM.innerHTML = `<div>RemoveAll</div>`

    $interfaceDOM.appendChild($removeAllBtnDOM)

    $removeAllBtnDOM.addEventListener('click', onClickReset)
  }
}

export default TodoRest
