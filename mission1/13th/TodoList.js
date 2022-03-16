export default function TodoList ({ $app, data }) {
  if (!Array.isArray(data)) {
    throw new Error('데이터 형태를 확인해 주세요.')
  }

  if (!new.target) {
    throw new Error('new keword를 붙여주세요.')
  }

  this.data = data;
  this.$app = $app;

  this.render = function () {
    this.$app.innerHTML = `
      ${this.data.map((item) => `<div>${item.isCompleted ? `<del>${item.text}</del>` : item.text}</div>`).join('')}
      <br />
    `;
  }

  this.setState = function (nextData) {
    this.data = nextData;
    this.render();
  }

  this.render();
}
