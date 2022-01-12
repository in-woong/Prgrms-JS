export default function TodoList({ $element, props }) {
  this.$element = $element;
  this.props = props;
  
  this.render = function() {
    this.$element.innerHTML = `
        ${this.props.tasks
          .map(({ id, text, isCompleted }) => `
            <li data-id=${id} >
              <span>${isCompleted ? `<s>${text}</s>` : `${text}`}</span>
              <button type="button">삭제</button>
            </li>
          `)
          .join('')
        }
    `;
  };

  this.bindEvent = function() {
    const $tasks = document.querySelector('.tasks');

    $tasks.addEventListener('click', ({ target }) => {
      if(target.nodeName === 'SPAN' || target.nodeName === 'S') {
        this.props.onClickToggleCompleted(+target.closest('li').dataset.id);
      }

      if(target.nodeName === 'BUTTON') {
        this.props.onClickDeleteTask(+target.closest('li').dataset.id);
      }
    });
  }

  this.render();
  this.bindEvent();
};
