import Input from '../components/Input.js';
import View from '../core/View.js';
import { delegate, on, paintTemplate, qs } from '../util/helper.js';

export default class InputFormView extends View {
  constructor() {
    super(qs('#todo-input-form'));
    this.todoInput = qs('.todo-input', this.element);
    paintTemplate(
      this.todoInput,
      Input({ placeholder: '할 일을 추가해주세요!' })
    );

    this.inputElement = qs('[type=text]', this.todoInput);

    this.bindEvent();
  }

  bindEvent() {
    on(this.element, 'submit', (event) => this.handleSubmit(event));
    delegate(this.element, 'click', '.btn-remove-all', (event) => {
      this.removeAllTodos(event);
    });
  }

  removeAllTodos() {
    this.emit('@removeAll');
  }

  resetInput() {
    this.element.reset();
    this.inputElement.focus();
  }

  handleSubmit(event) {
    event.preventDefault();

    const text = this.inputElement.value.trim();

    if (!text) {
      return this.resetInput();
    }

    this.emit('@submit', { text });
  }
}
