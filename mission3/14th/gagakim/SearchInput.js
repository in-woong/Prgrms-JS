function SearchInput({$target, onKeyup}) {

    this.$target = $target
    this.$form = document.createElement('form')
    $target.appendChild(this.$form)

    this.$form.addEventListener('keyup', (event) => {
        event.preventDefault()

        const $input = this.$form.querySelector('input')
        onKeyup($input.value)
    })

    this.render = () => {
        this.$form.innerHTML = `
            <input id="search-keyword" />
        `
    }

    this.render()
}
