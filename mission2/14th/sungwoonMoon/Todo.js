export default function Todo(todo) {
  const li = document.createElement('li');
  li.innerText = todo.text;

  const btnStatus = document.createElement('button');
  btnStatus.setAttribute('id', `status_${todo.id}`);
  btnStatus.textContent = todo.isCompleted ? '진행' : '완료';
  li.appendChild(btnStatus);

  const btnDelete = document.createElement('button');
  btnDelete.setAttribute('id', `delete_${todo.id}`);
  btnDelete.textContent = '삭제';
  li.appendChild(btnDelete);

  const s = document.createElement('s');
  s.appendChild(li);

  return todo.isCompleted ? s : li;
}
