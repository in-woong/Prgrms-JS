export default class TodoList {
    constructor({
        $app,
        onToggleItem,
        onRemoveItem,
        completedOnly,
    }) {
        this.state = []
        this.onToggleItem = onToggleItem
        this.onRemoveItem = onRemoveItem
        this.completedOnly = completedOnly

        this.$target = document.createElement("ul")
        this.$target.classList.add("todo-list")

        $app.appendChild(this.$target)

        this.addEventDelegator()
        this.render()
    }

    render() {
        this.$target.innerHTML = `${this.state.filter(({ isCompleted }) => isCompleted === this.completedOnly).reduce((acc, { content, isCompleted, _id }) => `${acc} <li data-_id=${_id} draggable="true">${isCompleted ? `<s>${content}</s>` : content} <button>삭제</button></li>`, "")}`
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

        this.$target.addEventListener("dragstart", (event) => {
            const { _id } = event.target.closest("li").dataset

            event.dataTransfer.setData("text/plain", _id)
            event.dataTransfer.dropEffect = "move"
        })

        this.$target.addEventListener("dragover", (event) => {
            event.preventDefault()
        })

        this.$target.addEventListener("drop", (event) => {
            event.preventDefault()
            const _id = event.dataTransfer.getData("text")
            this.onToggleItem(_id)
        })
    }
}
