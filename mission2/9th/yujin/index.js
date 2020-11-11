import App from './App.js' 

let data = [
    {
        text: 'JS 공부하기',
        isCompleted: true
    },
    {
        text: 'JS 복습하기',
        isCompleted: false,
    },
]

let data2 = [
    {
        text: '공부할까말까',
        isCompleted: true
    },
    {
        text: '복습할까말까',
        isCompleted: false,
    },
]


try {
    let tmp = new App(data, document.querySelector('#todo-list'));
    //let tmp2 = new App(data2, document.querySelector('#todo-list2'));


} catch (e) {
    alert(e.message)
}






