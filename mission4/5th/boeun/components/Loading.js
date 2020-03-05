import { SELECTOR } from '../shared/constant.js'

function Loading(params) {
    this.target = params.target

    this.setState = isLoading => {
        this.isLoading = isLoading
        this.render()
    }

    this.render = () => {
        if (this.isLoading) {
            document.querySelector(this.target).innerHTML = '<div class="loader">Loading...</div>'
            document.querySelector(SELECTOR.ADDTODO_BUTTON).disabled = true
        } else {
            document.querySelector(SELECTOR.ADDTODO_BUTTON).disabled = false
        }
    }
}

export default Loading
