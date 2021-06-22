export default class TodoList {
    constructor({
        $app, onToggleItem, onRemoveItem,
    }) {
        this.state = []
        this.onToggleItem = onToggleItem
        this.onRemoveItem = onRemoveItem

        this.$target = document.createElement("ul")
        this.$target.classList.add("todo-list")

        $app.appendChild(this.$target)

        this.addEventDelegator()
        this.render()
    }

    render() {
        this.$target.innerHTML = `${this.state.reduce((acc, { content, isCompleted, _id }) => `${acc} <li data-_id=${_id}>${isCompleted ? `<s>${content}</s>` : content} <button>삭제</button></li>`, "")}`
    }

    setState(newState) {
        this.state = newState
        this.render()
    }

    addEventDelegator() {
        this.$target.addEventListener("click", ({ target }) => {
            const { _id } = target.closest("li").dataset
            const { nodeName } = target
            switch (nodeName) {
            case "BUTTON":
                this.onRemoveItem(_id)
                break
            case "LI":
            case "S":
                this.onToggleItem(_id)
                break
            }
        })
    }
}
