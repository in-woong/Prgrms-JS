export default function ErrorViewer($target) {
  this.$target = $target
  this.render = err => (this.$target.innerHTML = err)
}
