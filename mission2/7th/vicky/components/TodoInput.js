import { ENTER_KEY_CODE } from '../utils/constantsKeys.js';
function TodoInput({ elementId, onChange }) {
  if (!(this instanceof TodoInput)) {
    throw new Error('error: invalid function TodoInput call!');
  }
  this.elementId = elementId;
  this.elementDom = document.querySelector(`#${this.elementId}`);
  this.listDom = document.querySelector(`#${this.elementId} .content`);
  this.onChange = onChange;
  // addList
  this.elementDom.addEventListener('keyup', (event) => {
    // prettier-ignore
    const { target: { name, value }, keyCode } = event;
    // 작성한 목록이 있고, enter를 눌렀을 때 add list 후 reset한다.
    if (name === 'addList' && value && keyCode === ENTER_KEY_CODE) {
      const addData = {
        index: Date.now(),
        text: event.target.value,
        isCompleted: false,
      };
      this.onChange.add(addData);
      event.target.value = '';
    }
  });

  this.elementDom.addEventListener('click', (event) => {
    event.stopPropagation();
    // prettier-ignore
    const { target: { nodeName, name }} = event;
    // removeList
    if (nodeName === 'BUTTON' && name === 'deleteList') {
      // prettier-ignore
      const { target: { parentNode: { dataset: { idx }}}} = event;
      this.onChange.remove(idx);
    }
    // toggleList
    if (nodeName === 'S') {
      // prettier-ignore
      const { target: { parentNode: { dataset: { idx }}}} = event;
      this.onChange.toggle(idx);
    }
    if (nodeName === 'LI') {
      // prettier-ignore
      const { target: { dataset: { idx }}} = event;
      this.onChange.toggle(idx);
    }
  });

  // removeAllList
  this.elementDom.addEventListener('click', (event) => {
    // 작성한 목록이 있고, enter를 눌렀을 때 add list 후 reset한다.
    if (event.target.name === 'deleteAllList') {
      this.elementDom.dispatchEvent(new CustomEvent('removeAll'));
    }
  });
}

export default TodoInput;
