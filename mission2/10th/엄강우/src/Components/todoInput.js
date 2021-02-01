export default function TodoInput($target) {
    this.$target = $target
    this.$target.innerHTML = '<input type="text" id="input"></input>'

    document.querySelector('#input').addEventListener('keydown', (res) => res.key === 'Enter' ? this.addTodo(res.target.value) : pass)
}