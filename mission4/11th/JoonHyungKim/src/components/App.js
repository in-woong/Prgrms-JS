import ToDoList from "./ToDoList.js"
import ToDoInput from "./ToDoInput.js"
import ToDoCount from "./ToDoCount.js"
import RemoveAllButton from "./RemoveAllButton.js"
import Loading from "./Loading.js"

import ToDoApi from "../api/ToDoApi.js"

const validateData = (data) => {
    if (data == null) {
        throw new Error("빈 데이터입니다.")
    }

    if (!Array.isArray(data)) {
        throw new Error("배열 값만 사용할 수 있습니다.")
    }

    if (!data.every((item) => item.hasOwnProperty("content") && item.hasOwnProperty("isCompleted") && item.hasOwnProperty("_id"))) {
        throw new Error("잘못된 데이터 입니다.")
    }

    if (!data.every(({ content, isCompleted, _id }) => typeof content === "string" && typeof isCompleted === "boolean" && typeof _id === "string")) {
        throw new Error("잘못된 데이터입니다.")
    }
}

export default class App {
    constructor({ $app, user }) {
        this.$app = $app
        this.$app.innerHTML = `<h1>${user}'s ToDo</h1>`
        this.state = []
        this.api = new ToDoApi(user)
        this.loading = new Loading({ $target: this.$app })

        this.$children = [
            new ToDoInput({
                $app: this.$app,
                onAddTodoItem: async (content) => {
                    try {
                        await this.api.addToDo({ content })
                        await this.fetchStateFromApi()
                    } catch (err) {
                        alert(err)
                    }
                },
            }),
            new ToDoList({
                $app: this.$app,
                onToggleItem: async (_id) => {
                    try {
                        await this.api.toggleCompleted({ _id })
                        await this.fetchStateFromApi()
                    } catch (err) {
                        alert(err)
                    }
                },
                onRemoveItem: async (_id) => {
                    try {
                        await this.api.deleteToDo({ _id })
                        await this.fetchStateFromApi()
                    } catch (err) {
                        alert(err)
                    }
                },
                completedOnly: false,
            }),
            new ToDoList({
                $app: this.$app,
                onToggleItem: async (_id) => {
                    try {
                        await this.api.toggleCompleted({ _id })
                        await this.fetchStateFromApi()
                    } catch (err) {
                        alert(err)
                    }
                },
                onRemoveItem: async (_id) => {
                    try {
                        await this.api.deleteToDo({ _id })
                        await this.fetchStateFromApi()
                    } catch (err) {
                        alert(err)
                    }
                },
                completedOnly: true,
            }),
            new ToDoCount({
                $app: this.$app,
            }),
            new RemoveAllButton({
                $app: this.$app,
            }),
        ];
        (async () => {
            try {
                await this.fetchStateFromApi()
            } catch (err) {
                console.error(err)
            }
        })()

        this.$app.addEventListener("removeall", async () => {
            try {
                await this.api.deleteAllToDo()
                await this.fetchStateFromApi()
            } catch (err) {
                console.error(err)
            }
        })
    }

    async fetchStateFromApi() {
        this.loading.setState(true)
        const newState = await this.api.getToDo()
        this.loading.setState(false)
        validateData(newState)
        this.state = newState
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
