import { testError } from "../utils/testInput.js"

function TodoList(props){
    
    const { $target, deleteTodo, underLineTodo, showApiTodo } = props
    const $list = document.createElement("div");
    $list.setAttribute("class", "todoList");

    this.$target = $target;
    this.component = "";

    this.makeComponent = (data) => {

        const html = data.map((dataItem) => {   

            return (
                (dataItem.isCompleted) 
                ? 
                `
                <li class = "todoItem" data-id = ${dataItem._id}>
                    <s>${dataItem.content}</s> 
                    <button class = "deleteBtn">삭제</button> 
                </li>
                `
                : 
                `
                <li class = "todoItem" data-id = ${dataItem._id}>
                    <span>${dataItem.content}</span> 
                    <button class = "deleteBtn">삭제</button> 
                </li>
                `
            )
        }).join("") 

        return `<ul class = "todoData">${html}</ul>`; 
    }

    this.setState = (newState) => {
        testError(newState);
        this.component = this.makeComponent(newState);
        this.render();
    }

    this.render = () => {
        this.$target.appendChild($list);
        $list.innerHTML = this.component;
    }

    this.removeTodoEvent = () => {
        $list.addEventListener("click", (e) => {
            const { tagName } = e.target;
            const dataId = e.target.closest("li").dataset.id;

            if (tagName === "BUTTON"){    
                deleteTodo(dataId);
            } else if (tagName === "SPAN" || tagName === "S"){
                underLineTodo(dataId);
            }
        }) 
    }

    // 실행
    showApiTodo();
    this.removeTodoEvent();
}

export default TodoList