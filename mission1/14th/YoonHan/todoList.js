'use strict';

import { originalData, myData, myData2 } from './data.js';
import { isValidData } from './validate.js';

function TodoList(data, element) {
  // new keyword 동반하여 호출했는지 체크
  if (!(this instanceof TodoList)) {
    throw new Error('[without new keyword error]: new 키워드를 사용해 호출해 주세요');
  }
  // selector 유효성 체크
  if (element === null) {
    throw new Error('[element error]: 올바른 DOM Element 를 인자로 전달해 주세요');
  }

  this.data = data;
  this.keyTypeObject = {
    text: 'string',
    isCompleted: 'boolean'
  };
  this.$container = document.createElement('div');
  this.setState = function(nextData) {
    if (!isValidData(nextData, this.keyTypeObject)) {
      throw new Error('[setState error]: 유효한 data 인지 확인해 주세요');
    }
    this.data = nextData;
    this.render();
  }
  this.render = function() {
    const liTagsString = this.data.map(item => {
      if (item.isCompleted) {
        return `<li><s>${item.text}</s></li>`;
      } else {
        return `<li>${item.text}</li>`;
      }
    }).join('');
    this.$container.innerHTML = `<ul>${liTagsString}</ul>`;
    element.appendChild(this.$container);
  }

  // 데이터 유효성 체크
  if (!isValidData(data, this.keyTypeObject)) {
    throw new Error('[component data setting error]: 유효한 data 인지 확인해주세요');
  }

  // 렌더링
  this.render();
}

const todoList = new TodoList(originalData, document.querySelector('#app'));
const todoList2 = new TodoList(myData, document.querySelector('#app'));
const todoList3 = new TodoList(myData2, document.querySelector('#app'));
// setState 호출(state 변화를 보기 위해 setTimeout으로 감쌈)
setTimeout(() => {
  todoList.setState([{
    text: 'changed Todo',
    isCompleted: true,
  }])
}, 2000);
setTimeout(() => {
  todoList2.setState([{
    text: 'changed Todo',
    isCompleted: true,
  }])
}, 3000);
setTimeout(() => {
  todoList3.setState([{
    text: 'changed Todo',
    isCompleted: true,
  }])
}, 4000);
