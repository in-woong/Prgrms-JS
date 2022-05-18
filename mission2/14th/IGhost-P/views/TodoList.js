export function TodoList({ $target }) {
  this.$parentEl = document.createElement('ul');

  $target.appendChild(this.$parentEl);

  this.addHandlerLoad = function (handler) {
    window.addEventListener('load', handler);
  };

  this.addHandlerBtn = function (handler) {
    this.$parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.todo--btn');
      const li = e.target.closest('li');
      if (!btn) return;
      const removeId = li.dataset.id;
      handler(removeId);
    });
  };

  this.addHandlerText = function (handler) {
    this.$parentEl.addEventListener('click', function (e) {
      const p = e.target.closest('p');
      const li = e.target.closest('li');
      if (!p) return;
      const cutLine = li.dataset.id;
      handler(cutLine);
    });
  };

  this.setState = function (nextData) {
    this.render(nextData);
  };

  this.render = function (data) {
    const markup = data.map((data) => this.generateMarkup(data)).join(' ');
    this.$parentEl.innerHTML = `${markup}`;
  };

  this.clear = function () {
    this.$parentEl.innerHTML = '';
  };

  this.generateMarkup = function ({ text, isCompleted, key }) {
    return isCompleted
      ? `<li class="todo--list" data-id = "${key}">
            <p><s>${text}</s></p>
            <button class="todo--btn">삭제</button>
         </li>`
      : `<li class="todo--list" data-id = "${key}">
      <p>${text}</p>
            <button class="todo--btn">삭제</button>
         </li>`;
  };
}
