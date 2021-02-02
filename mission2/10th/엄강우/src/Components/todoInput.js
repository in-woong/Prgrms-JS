export default function TodoInput($target) {
  try {
    if(!new.target) {
        throw new error("you need new keyword")
    }
    this.$target = $target
    this.$target.innerHTML = `<input type="text" id="${this.$target.id}-form"></input>`
  } catch (e) {
    alert(e.message)
  }
  
}
