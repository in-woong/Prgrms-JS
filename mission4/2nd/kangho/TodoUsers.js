export default class TodoUsers {
  constructor($host) {
    this.$host = $host;
    this.state = {
      users: [],
      currentUser: '',
    };
    this.init();
  }

  setState(data) {
    Object.keys(data).forEach(key => {
      this.state[key] = data[key];
    });
    this.render();
  };

  createTemplate() {
    
    let ret = `<h1>current user : ${this.state.currentUser}</h1>`;
    ret += this.state.users.map(user => `<li data-user="${user}">${user}</li>`).join('');
    return ret;
  }

  init(data = {}) {
    this.$wrapper = document.createElement('div');
    this.$host.appendChild(this.$wrapper);
    this.$wrapper.addEventListener("click", (e) => {
      const target = e.target;
      this.$wrapper.dispatchEvent(new CustomEvent('click-user', {
        bubbles: true,
        detail: { 
          user: target.dataset.user,
        }
      }));
    })
    this.render()
  }

  render() {
    this.$wrapper.innerHTML = this.createTemplate();
  };
}