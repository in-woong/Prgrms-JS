export default class TodoInput {
    constructor({ $app, onAddTodoItem }) {
        this.onAddTodoItem = onAddTodoItem

        const temporaryFrag = document.createDocumentFragment()

        this.$target = document.createElement("input")
        this.$label = document.createElement("label")

        this.$target.id = "todo-input"
        this.$label.htmlFor = "todo-input"
        this.$label.innerText = "ToDo : "

        this.$target.addEventListener("keydown", ({ code, isComposing }) => {
            if (!isComposing && this.$target.value && code === "Enter") {
                this.onAddTodoItem(this.$target.value)

                this.$target.value = ""
            }
        })

        temporaryFrag.appendChild(this.$label)
        temporaryFrag.appendChild(this.$target)
        $app.appendChild(temporaryFrag)
    }
}
