import App from "./App.js"
let data = [
    {
      id : 1,
      text: 'JS 공부하기',
      isCompleted : false
    },
    {
      id : 2,
      text: 'JS 복습하기',
      isCompleted : false
    }
   ]
new App(data, document.querySelector('#App'));