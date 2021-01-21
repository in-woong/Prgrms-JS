export default function InputTodo ($app, addTodo) {
    const target = document.createElement("div")
    target.className = "todo-input"
    
    const input = document.createElement("input")
    input.className = "input"

    const button = document.createElement("button")
    button.className = "reg-bt"
    button.textContent  = "등록"

    target.appendChild(input)
    target.appendChild(button)
    
    $app.appendChild(target)
    this.target = target
    this.input = input
    
    this.addTodo = addTodo

    this.target.addEventListener("click", e => {
        if(e.target.className === "reg-bt" && this.input.value){
            this.addTodo(this.input.value)
        }
    })

}