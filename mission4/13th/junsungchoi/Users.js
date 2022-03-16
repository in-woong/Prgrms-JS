export default function Users({ $target, initialState, onClick }) {
  this.$target = $target;
  this.state = initialState;
  this.onClick = onClick;

  this.$users = document.createElement('ul');
  this.$target.appendChild(this.$users);

  this.render = function() {
    this.$users.innerHTML = this.state.map((user, index) =>
    `<li data-index=${index}>
      ${user}
    </li>`)
    .join('');
  };

  this.$users.addEventListener('click', (e) => {
    const $li = e.target.closest('li');
    const username = $li.innerText;

    onClick(username);
  });

  this.setState = function(nextState) {
    this.state = nextState;
    this.render();
  };
}
