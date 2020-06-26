import App from './component/App.js'

try {
  const todo = new App(document.querySelector('#todo'), 'todo')
  const todoAnimal = new App(
    document.querySelector('#todo-animal'),
    'todo-animal'
  )
  const todoFood = new App(document.querySelector('#todo-food'), 'todo-food')

  todo.render()
  todoAnimal.render()
  todoFood.render()
} catch (e) {
  console.error(e)
  document.body.innerHTML = `
    <h1>에러가 발생했습니다.</h1>
    <p>${e}</p>
  `
}
