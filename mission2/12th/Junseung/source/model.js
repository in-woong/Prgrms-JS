export default class TodoModel{
    get(){
        const todo = JSON.parse(localStorage.getItem("todo"))
        return todo ? todo : [];
    }

    set(dataList){
        localStorage.setItem("todo", JSON.stringify(dataList))
    }
}