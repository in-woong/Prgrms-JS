/**
 * @param : data, dom target
*/
const TodoList = function(data, $target) {
  this.data = data;
  this.$target = $target;

  const $ul = document.createElement('ul');
  
  this.$target.appendChild($ul);

  this.isValid = data => {
    if (!new.target) {
      throw new Error('new 키워드를 사용해 주세요!');
    }
    if (data === null || data === undefined) {
      throw new Error('올바른 형태의 데이터가 아닙니다.');
    }

    if (!Array.isArray(data)) {
      throw new Error('배열 타입의 데이터가 아닙니다.');
    }
  }

  this.setState = nextData => {
    this.data = nextData;
    this.render();
  }

  this.render = () => {
    this.isValid(data);

    this.data.forEach(({ text, isCompleted }) => {
      const $li = document.createElement('li');

      $li.innerHTML += `${isCompleted ? `<s>${text}</s>` : `${text}`}`;

      $ul.appendChild($li);
    });
  }

  this.render();
}
