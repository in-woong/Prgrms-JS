export default class RemoveAllButton {
    constructor({ $app }) {
        this.$target = document.createElement("button")
        this.$target.innerHTML = "모두 삭제"

        this.$target.onclick = () => {
            $app.dispatchEvent(new CustomEvent("removeall"))
        }

        $app.appendChild(this.$target)
    }
}
