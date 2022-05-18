export default function TodoInput({ $target, onSubmit }) {
  this.$form = document.createElement('form');
  this.$form.addEventListener('submit', (event) => {
    const content = this.$input.value;
    if (content) {
      this.$input.focus();
      this.$input.value = '';
      onSubmit({ content });
    }

    event.preventDefault();
  });

  this.$input = document.createElement('input');

  this.$submit = document.createElement('input');
  this.$submit.setAttribute('type', 'submit');
  this.$submit.setAttribute('value', '추가');

  this.$deleteButton = document.createElement('button');
  this.$deleteButton.textContent = '모두 삭제';
  this.$deleteButton.addEventListener('click', (event) => {
    $target.dispatchEvent(new CustomEvent('removeAll'));
  });

  $target.appendChild(this.$form);
  this.$form.appendChild(this.$input);
  this.$form.appendChild(this.$submit);
  this.$form.appendChild(this.$deleteButton);
}
