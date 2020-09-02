var js = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
];

var css = [
  {
    text: 'css 공부하기',
    isCompleted: false,
  },
  {
    text: 'css 복습하기',
    isCompleted: false,
  },
];

var html = [
  {
    text: 'html 공부하기',
    isCompleted: true,
  },
  {
    text: 'html 복습하기',
    isCompleted: true,
  },
];

const checkNewKeyword = (context) => {
  if (context === window) {
    throw new Error('new keyword error');
  }
};

const checkEmptyData = (data) => {
  if (!data.length) {
    throw new Error('empty data');
  }
};

function TodoList(data, $target) {
  this.data = data;
  this.$target = document.createElement($target);
  this.$root = document.querySelector('#todo-list');
  this.$root.appendChild(this.$target);

  this.checkError = () => {
    checkNewKeyword(this);
    checkEmptyData(this.data);
  };

  this.render = () => {
    this.checkError();
    const html = this.data
      .map(({ isCompleted, text }) =>
        isCompleted ? `<li><s>${text}</s></li>` : `<li>${text}</li>`
      )
      .join('');

    this.$target.innerHTML = html;
  };

  this.setState = (nextData) => {
    this.data = nextData;
    this.render();
  };
}

new TodoList(js, 'ul').render();
new TodoList(css, 'ul').render();
new TodoList(html, 'ul').render();

/*
class TodoLists {
  constructor(data) {
    this.data = data;
    this.$element = document.createElement('ul');
    this.$root = document.querySelector('#todo-list');
    this.$root.appendChild(this.$element);
    return this;
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    if (!this.data) return;
    if (!Array.isArray(this.data)) return;
    this.$element.innerHTML = this.#getListsHTML();
  }

  #getListsHTML() {
    return this.data.reduce(
      (html, todo) => (html += this.#getListHTML(todo)),
      ''
    );
  }

  #getListHTML({ text, isCompleted }) {
    return isCompleted ? `<li><s>${text}</s></li>` : `<li>${text}</li>`;
  }
}

new TodoLists(js).render();
new TodoLists(css).render();
new TodoLists(html).render();

*/
