import TodoList from "./TodoList.js"
import TodoInput from "./TodoInput.js"
import TodoCount from "./TodoCount.js"
import RemoveAllButton from "./RemoveAllButton.js"

const validateData = (data) => {
    if (data == null) {
        throw new Error("빈 데이터입니다.")
    }

    if (!Array.isArray(data)) {
        throw new Error("배열 값만 사용할 수 있습니다.")
    }

    if (!data.every(({ text = null, isCompleted = null }) => typeof text === "string" && typeof isCompleted === "boolean")) {
        throw new Error("잘못된 데이터입니다.")
    }
}

export default class App {
    constructor({ $app, initState }) {
        this.$app = $app
        validateData(initState)
        this.state = initState
        this.$children = [
            new TodoInput({
                $app: this.$app,
                onAddTodoItem: (text) => {
                    this.setState([
                        ...this.state,
                        {
                            text,
                            isCompleted: false,
                        },
                    ])
                },
            }),
            new TodoList({
                $app: this.$app,
                initState,
                onToggleItem: (index) => {
                    const newState = [...this.state]
                    newState[index].isCompleted = !newState[index].isCompleted
                    this.setState(newState)
                },
                onRemoveItem: (index) => {
                    const newState = [...this.state]
                    newState.splice(index, 1)
                    this.setState(newState)
                },
            }),
            new TodoCount({
                $app: this.$app,
                initState,
            }),
            new RemoveAllButton({
                $app: this.$app,
            }),
        ]

        this.$app.addEventListener("removeall", () => {
            this.setState([])
        })
    }

    setState(newState) {
        validateData(newState)
        this.state = newState
        localStorage.setItem("todo", JSON.stringify(this.state))
        this.render()
    }

    render() {
        this.$children.forEach((child) => {
            if (child.setState) {
                child.setState(this.state)
            }
        })
    }
}
