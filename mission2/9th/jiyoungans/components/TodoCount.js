export default function TodoCount(data, $countElement) {
  this.render = (data) => {
    const totCount = data.length;
    const completeCount = data.filter(({ isCompleted }) => isCompleted).length;
    $countElement.innerHTML = `<span>${completeCount}/${totCount}</span>`;
  };

  this.render(data);
}
