export const dispatchRemoveAllEvent = ($target) => {
  $target.dispatchEvent(new CustomEvent('removeAll', { bubbles: true }))
}
