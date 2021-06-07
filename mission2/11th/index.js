import main from "./main.js"
let data = [
    {
      text: 'JS 공부하기',
      isCompleted : false
    },
    {
      text: 'JS 복습하기',
      isCompleted : false
    }
   ]
new main(data, document.querySelector('#main'));