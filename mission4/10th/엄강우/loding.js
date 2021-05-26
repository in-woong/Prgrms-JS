export default function loading(params) {
    this.$spinner = params.$spinner

    this.showSpinner = () => {
        this.$spinner.className = "show"
    }

    this.hideSpinner = () => {
        this.$spinner.className = ""
    }
}