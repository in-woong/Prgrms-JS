try {
  const selector = '#myApp'
  const title = 'my first todo app'
  const myApp = new App(selector, title)
} catch (e) {
  console.log(e)
}
