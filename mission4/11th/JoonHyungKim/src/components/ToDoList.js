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
        this.$target.innerHTML = `${this.state.filter(({ isCompleted }) => isCompleted === this.completedOnly).reduce((acc, { content, isCompleted, _id }) => `${acc} <li data-item=${JSON.stringify({ isCompleted, _id })} draggable="true">${isCompleted ? `<s>${content}</s>` : content} <button>삭제</button></li>`, "")}`
    }

    setState(newState) {
        this.state = newState
        this.render()
    }

    addEventDelegator() {
        this.$target.addEventListener("click", ({ target }) => {
            const { _id } = JSON.parse(target.closest("li").dataset.item)

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
            const { item } = event.target.closest("li").dataset

            event.dataTransfer.setData("text/plain", item)
            event.dataTransfer.dropEffect = "move"
        })

        this.$target.addEventListener("dragover", (event) => {
            event.preventDefault()
        })

        this.$target.addEventListener("drop", (event) => {
            event.preventDefault()
            const { isCompleted, _id } = JSON.parse(event.dataTransfer.getData("text/plain"))
            if (this.completedOnly !== isCompleted) {
                this.onToggleItem(_id)
            }
        })
    }
}
