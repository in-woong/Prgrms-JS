export default function TodoPanel({ $element, props }){
  this.$element = $element;
  this.props = props;

  this.render = function() {
    this.$element.innerHTML = `
      <input 
        type="text" 
        class="task-control" 
        placeholder="할 일을 작성해주세요."
        title="task-control"
        value=${this.props.text}
      >
      <button type="button" class="add-button">추가하기</button>
      <button type="button" class="delete-all-button">전체 삭제</button>
    `;
  }

  this.bindEvent = function() {
    const $taskControl = document.querySelector('.task-control');
    const $addButton = document.querySelector('.add-button');
    const $deleteAllButton = document.querySelector('.delete-all-button');

    $taskControl.focus();
    $taskControl.setSelectionRange($taskControl.value.length, $taskControl.value.length);

    $taskControl.addEventListener('input', ({ target: { value }}) => {
      if(!value.trim()) {
        return;
      }

      this.props.onInputChangeText(value.trim());
    });

    $taskControl.addEventListener('keyup', ({ key }) => {
      if(key !== 'Enter') {
        return;
      }

      this.props.onClickAddTask();
    });

    $addButton.addEventListener('click', () => {
      this.props.onClickAddTask();
    });

    $deleteAllButton.addEventListener('click', () => {
      $deleteAllButton.dispatchEvent(new CustomEvent('@removeAll', { bubbles: true }));
    })
  }

  this.render();
  this.bindEvent();
}
