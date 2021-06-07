import App from "./App.js"
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
new App(data, document.querySelector('#App'));