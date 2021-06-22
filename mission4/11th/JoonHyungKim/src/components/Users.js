import TodoApi from "../api/TodoApi.js"

export default class Users {
    constructor({ $list }) {
        this.$target = document.createElement('ul')
        $list.appendChild(this.$target)
        this.state = [];
        (async() => {
            try {
                this.state = await TodoApi.getUserList();
                this.render();
            }
            catch (err) {
                console.error(err);
            }
        })()

        this.$target.addEventListener("click", ({ target }) => {
            const { user } = target.closest("li").dataset
            document.dispatchEvent(new CustomEvent("userSelected", { detail: user }))
        })
    }

    render() {
        this.$target.innerHTML = `${this.state.reduce((acc, cur) => `${acc} <li data-user=${cur}>${cur}</li>`, "")}`
    }
}