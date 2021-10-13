const $target = document.querySelector('main')

new App({
  $target,
  initialState: storage.load('todos', [])
})
