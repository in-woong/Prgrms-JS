export default function TodoCount(data, $countElement) {
  this.data = data;

  this.render = () => {
    const totCount = this.data.length;
    const completeCount = this.data.filter(({ isCompleted }) => isCompleted).length;
    $countElement.innerHTML = `<span>${completeCount}/${totCount}</span>`;
  };

  this.render(data);
}
