function TodoDelete($app,initialState) {
    this.state = initialState

    const $parent = document.querySelector('.TodoList')

    const $target = document.createElement('button')
    $target.className = 'TodoDelete'
    $parent.appendChild($target)
}