export default function TodoRemoveAll({ $app }) {
  const $target = document.createElement('button')
  $target.textContent = 'All REMOVE'
  $target.className = 'button--all-remove'

  $app.appendChild($target)

  this.$target = $target

  this.addRemoveAllEvent = () => {
    $target.addEventListener('click', (event) => {
        const removeAllEvent = new CustomEvent('remove-all');
        event.target.dispatchEvent(removeAllEvent);
    })
  }

  this.addRemoveAllEvent()
}
