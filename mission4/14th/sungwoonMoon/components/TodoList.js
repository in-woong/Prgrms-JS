export default function TodoList({
  $target,
  initialState,
  onStatusChange,
  onDelete,
}) {
  this.$ul = document.createElement('ul');
  this.$ul.addEventListener('click', function (event) {
    const { nodeName } = event.target;
    if (nodeName === 'BUTTON') {
      const [type, id] = event.target.id.split('_');
      if (type === 'status') {
        onStatusChange(id);
      } else if (type === 'delete') {
        onDelete(id);
      }
    }
  });
  $target.appendChild(this.$ul);

  this.state = initialState || [];

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.renderLoader = () => {
    this.$ul.innerHTML = `<h1>불러오는 중...</h1>`;
  };

  this.render = () => {
    this.$ul.innerHTML = this.state
      .map(({ _id, content, isCompleted }) => {
        const todoContent = isCompleted ? `<s>${content}</s>` : content;
        const btnStatus = `<button id=status_${_id}>${
          isCompleted ? '진행' : '완료'
        }</button>`;
        const btnDelete = `<button id=delete_${_id}>삭제</button>`;
        return `<li>${todoContent} ${btnStatus} ${btnDelete}</li>`;
      })
      .join('');
  };

  this.render();
}
