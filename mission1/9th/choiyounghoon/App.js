const data = [
    {
        text: "JS 공부하기",
        isCompleted: true
    },
    {
        text: "JS 복습하기",
        isCompleted: false
    }
  ]
const data2 = [
    {
        text: "사이버펑크 기다리기",
        isCompleted: true
    },
    {
        text: "프론트엔드 취업하기",
        isCompleted: false
    }
];    
const data3 = [
    {
        text: "운동하기",
        isCompleted: true
    },
    {
        text: "자격증공부하기",
        isCompleted: true
    }
];
const testData = [];
const testData2 = [
    {
        text: false,
        isCompleted: true
    }
];


// 이곳에서 코딩을 시작하세요!
class TodoList{
    ERROR_MESSAGE = "error message";

    constructor(data,id){
        this.data = data;
        this.id = id;
        this.checkData();
        this.makeElement();
        this.render();
    }
    checkData(){
        if(this.data === null || 
            this.data === undefined || 
            Array.isArray(this.data) === false || 
            this.data.length === 0)
        {
            throw new Error(this.ERROR_MESSAGE);
        }
        this.data.forEach(item=>{
            if(typeof item.text !== "string" ||
            typeof item.isCompleted !== "boolean")
            {
                throw new Error(this.ERROR_MESSAGE)
            }
        })
    }
    makeElement(){
        const App = document.getElementById("App");
        const todoList = document.createElement("div");
        todoList.setAttribute("id",this.id);
        App.appendChild(todoList);
    }
    render(){
        const todoList = document.getElementById(this.id);
        todoList.innerHTML = "";
        this.data.forEach( item => {
            if(item.isCompleted){
                todoList.innerHTML += `<s>${item.text}</s><br/>`;
            }
            else{
                todoList.innerHTML += `${item.text}<br/>`;
            }
        })
    }
    setState(nextData){
        this.data = nextData;
        this.render();
    }
}
const todoList = new TodoList(data,"todo-list");
const todoList2 = new TodoList(data2,"todo-list2");
const todoList3 = new TodoList(data3,"todo-list3");
