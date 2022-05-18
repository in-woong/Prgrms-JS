export default function TodoCount(root) {
  this.data = {
    totalLength: 0,
    completeLength: 0,
  };

  this.ul = document.createElement('ul');

  this.render = () => {
    this.ul.innerHTML = '';

    const liTotalLength = document.createElement('li');
    liTotalLength.innerText = `총 개수 : ${this.data.totalLength}`;
    const liCompleteLength = document.createElement('li');
    liCompleteLength.innerText = `완료 개수 : ${this.data.completeLength}`;

    this.ul.appendChild(liTotalLength);
    this.ul.appendChild(liCompleteLength);

    root.appendChild(this.ul);
  };
  this.setState = (newData) => {
    this.data = newData;
    this.render();
  };

  this.render();
}
