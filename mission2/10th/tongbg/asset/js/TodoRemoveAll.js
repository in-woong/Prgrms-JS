import { isNew } from './validateData.js'

function TodoRemoveAll({ parentDOM, removeAllBtnDOM, removeAllHandler }) {
  if (isNew(new.target)) {
    const event = new CustomEvent('removeAll')

    parentDOM.addEventListener('removeAll', removeAllHandler)

    removeAllBtnDOM.addEventListener('click', (e) => {
      parentDOM.dispatchEvent(event)
    })
  }
}

export default TodoRemoveAll
