export default class TodoInput {
    constructor({ $app, onAddTodoItem }) {
        this.onAddTodoItem = onAddTodoItem

        this.$target = document.createElement("input")
        this.$target.setAttribute("type", "text")

        this.$target.addEventListener("keydown", ({ code, isComposing }) => {
            if (!isComposing && this.$target.value && code === "Enter") {
                this.onAddTodoItem(this.$target.value)

                this.$target.value = ""
            }
        })

        $app.appendChild(this.$target)
    }
}
