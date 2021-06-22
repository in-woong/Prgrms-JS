export default class Loading {
    constructor({ $target }) {
        this.$loading = document.createElement("div")
        this.$loading.innerHTML = "<p> Loading... </p><progress/>"

        $target.appendChild(this.$loading)

        this.state = false

        this.render()
    }

    setState(newState) {
        if (typeof newState !== "boolean") {
            throw new TypeError("boolean이 아닙니다.")
        }

        this.state = newState

        this.render()
    }

    render() {
        if (this.state) {
            this.$loading.classList.remove("not-loading")
        } else {
            this.$loading.classList.add("not-loading")
        }
    }
}
