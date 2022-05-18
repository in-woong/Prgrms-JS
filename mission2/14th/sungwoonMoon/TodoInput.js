export default function TodoInput(root, onSubmit) {
  const form = document.createElement('form');
  const input = document.createElement('input');
  const submit = document.createElement('input');
  submit.setAttribute('type', 'submit');
  submit.setAttribute('value', '추가');

  const button = document.createElement('button');
  button.textContent = '모두 삭제';
  const e = new CustomEvent('removeAll');
  button.addEventListener('click', (event) => {
    root.dispatchEvent(e);
  });

  form.appendChild(input);
  form.appendChild(submit);
  form.appendChild(button);
  root.appendChild(form);

  form.addEventListener('submit', (event) => {
    const text = input.value;
    if (text) {
      input.focus();
      input.value = '';
      onSubmit({ id: Date.now(), text, isCompleted: false });
    }

    event.preventDefault();
  });
}
