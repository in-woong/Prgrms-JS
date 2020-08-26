'use strict';
export default function TodoInput(
  target,
  addTodo,
  addRemoveAllEvent,
  removeAllEvent
) {
  this.$target = target;

  this.addButton = document.querySelector(`.${this.$target.className}-add-btn`);
  this.deleteButton = document.querySelector(
    `.${this.$target.className}-delete-btn`
  );
  addRemoveAllEvent(this.deleteButton);

  // input 창에서 Enter를 눌렸을 경우 입력
  this.$target.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      this.addButton.click();
    }
  });
  // 추가 버튼을 눌렸을 경우 입력
  this.addButton.addEventListener('click', () => {
    const todoText = this.$target.value.trim();

    if (!todoText) {
      alert('할 일을 적어주세요!');
      return;
    }
    addTodo(todoText);
    this.$target.value = '';
    this.$target.focus();
  });

  this.deleteButton.addEventListener('click', () => {
    this.deleteButton.dispatchEvent(removeAllEvent);
  });
}
