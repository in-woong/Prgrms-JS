export function renderErrorMessage(e) {
  const main = document.getElementById('main');
  main.innerHTML = '알 수 없는 에러가 발생했습니다. 개발자에게 문의해주세요.';
}

export function checkTodoParams(data) {
  if (!data || !Array.isArray(data)) {
    throw new Error('data가 없거나 Array가 아닙니다.');
  }

  if (
    !data.every(
      (todo) =>
        todo.id &&
        todo.text &&
        typeof todo.text === 'string' &&
        typeof todo.isCompleted === 'boolean'
    )
  ) {
    throw new Error('data의 element에 올바르지 못 한 값이 들어있습니다.');
  }
}

export function checkNewTarget(target, constructor) {
  if (!target instanceof constructor) {
    throw new Error('new 키워드를 사용해 주세요.');
  }
}

export function createElement(target) {
  const todoListClass = `${target}-list`;
  const todoInputClass = `${target}-input`;
  const todoCountClass = `${target}-count`;
  const todoAddButtonClass = `${todoInputClass}-add-btn`;
  const todoDelButtonClass = `${todoInputClass}-delete-btn`;

  const main = document.getElementById('main');

  const section = document.createElement('section');
  main.appendChild(section);
  section.className = target;

  const h2 = document.createElement('h2');
  h2.textContent = target.split('-').join(' ').toUpperCase();
  section.appendChild(h2);

  const div = document.createElement('div');

  const input = document.createElement('input');
  input.className = todoInputClass;
  input.type = 'text';
  input.placeholder = '할 일을 입력해주세요.';

  const addButton = document.createElement('button');
  addButton.className = todoAddButtonClass;
  addButton.textContent = '추가';

  const delButton = document.createElement('button');
  delButton.textContent = '전체 삭제';
  delButton.className = todoDelButtonClass;

  div.appendChild(input);
  div.appendChild(addButton);
  div.appendChild(delButton);
  section.appendChild(div);

  const ul = document.createElement('ul');
  ul.className = todoListClass;

  const p = document.createElement('p');
  p.className = todoCountClass;

  section.appendChild(ul);
  section.appendChild(p);

  return [todoListClass, todoInputClass, todoCountClass];
}
