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


try {
    let tmp = new App(data);

} catch (e) {
    alert(e.message)
}






