import { resetInput } from '../utils.js'

function TodoInput($app) {
  this.$app = $app
  this.$form = document.createElement('form')
  this.$label = document.createElement('label')
  this.$input = document.createElement('input')
  this.$buttonAdd = document.createElement('button')
  this.$buttonRemoveAll = document.createElement('button')
  this.init()
}

TodoInput.prototype.init = function() {
  const { $form, $label, $input, $buttonAdd, $buttonRemoveAll } = this

  const inputClassName = 'input-add-todo'
  const buttonAddClassName = 'btn-add-todo'
  const buttonRemoveAllClassName = 'btn-remove-all'

  $form.className = `todo-input-box`
  $input.className = inputClassName
  $buttonAdd.className = buttonAddClassName
  $buttonRemoveAll.className = buttonRemoveAllClassName

  $form.appendChild($label)
  $form.appendChild($input)
  $form.appendChild($buttonAdd)
  $form.appendChild($buttonRemoveAll)

  $label.outerHTML = '<label for="input-add-todo">할일 입력창</label>'
  $input.outerHTML = `<input type="text" class="${inputClassName}" placeholder="새로운 할일을 입력해주세요">`
  $buttonAdd.outerHTML = `<button type="submit" class="${buttonAddClassName}">추가하기</button>`
  $buttonRemoveAll.outerHTML = `<button type="button" class="${buttonRemoveAllClassName}">전체삭제</button>`
}

TodoInput.prototype.reset = function () {
  const { $app, $input } = this
  resetInput($app.querySelector(`.${$input.className}`))
}

TodoInput.prototype.render = function() {
  const { $app, $form } = this
  $app.appendChild($form)
}

export default TodoInput