import { isValidData, isFunction } from './utils.js';

function TodoList($target, _data, toggleTaskByIdx, deleteTaskByIdx) {
  if (!(this instanceof TodoList)) {
    throw new Error("Create instance with 'new'");
  }
  if (!isValidData(_data)) {
    throw new Error('wrong data');
  }
  if (!isFunction(toggleTaskByIdx)) {
    throw new Error('toggleTaskByIdx is not a function');
  }
  if (!isFunction(deleteTaskByIdx)) {
    throw new Error('deleteTaskByIdx is not a function');
  }

  this.render = function () {
    const dataHTML = this.data
      .map(({ text, isCompleted }, idx) =>
        isCompleted
          ? `<li class="task"> 
            <span name="${idx}"><s name="${idx}">${text}</s></span> 
            <button name="${idx}">Delete❌</button> 
           </li>`
          : `<li class="task">
            <span name="${idx}">${text}</span>
            <button name="${idx}">Delete❌</button> 
           </li>`
      )
      .join('');
    this.$target.innerHTML = `<ul class="tasks"> ${dataHTML} </ul>`;
  };

  this.initEventListener = function () {
    this.$target.onclick = (event) => {
      const nodeName = event.target.nodeName;
      try {
        const idx = parseInt(event.target.getAttribute('name'));
        if (nodeName === 'SPAN' || nodeName === 'S') {
          this.toggleTaskByIdx(idx);
        } else if (nodeName === 'BUTTON') {
          this.deleteTaskByIdx(idx);
        }
      } catch (error) {
        console.log('idx is not a digit');
      }
    };
  };

  this.setState = function (nextData) {
    if (!isValidData(nextData)) {
      throw new Error('wrong nextData');
    }
    this.data = nextData;
    this.render();
  };

  this.$target = $target;
  this.data = _data;
  this.toggleTaskByIdx = toggleTaskByIdx;
  this.deleteTaskByIdx = deleteTaskByIdx;

  this.render();
  this.initEventListener();
}

export default TodoList;
