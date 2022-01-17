export default function SearchInput($target, fetchInput) {
  this.render = () => {
    $target.addEventListener('keyup', (e) => fetchInput(e))
  }
  this.render()
}
