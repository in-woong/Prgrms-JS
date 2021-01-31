import { isNew } from './validateData.js'

function TodoRemoveAll({ $listDOM, $removeAllBtnDOM, removeAllHandler }) {
  if (isNew(new.target)) {
    const event = new CustomEvent('removeAll')

    $listDOM.addEventListener('removeAll', removeAllHandler)

    $removeAllBtnDOM.addEventListener('click', (e) => {
      $listDOM.dispatchEvent(event)
    })
  }
}

export default TodoRemoveAll
