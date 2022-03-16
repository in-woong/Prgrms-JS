import validData from './validation.js'

export default function TodoList(data, $target, onComplete) {
  //보너스#50 new사용 안하고 호출시
  if (!new.target) {
    throw new Error('Please use constructor function')
  }

  // validData(data)
  this.data = data

  const h2 = document.querySelector(`#${$target}`)
  const ul = document.createElement('ul')
  ul.addEventListener('click', (e) => {
    const $target = e.target.closest('li')
    if ($target) {
      const { index } = $target.dataset
      onComplete(parseInt(index))
    }
  })
  h2.appendChild(ul)

  this.render = function () {
    ul.innerHTML =
      this.data &&
      this.data
        .map(
          ({ text, isCompleted }, index) =>
            `<li data-index="${index}">${
              isCompleted ? `<s>${text}</s>` : text
            }</li>`
        )
        .join('')
  }

  this.setState = function (newData) {
    // validData(newData)
    this.data = newData
    this.render()
  }

  this.render()
}
