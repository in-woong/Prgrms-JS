function TodoDomGenerator(elementId) {
  if (!(this instanceof TodoDomGenerator)) {
    throw new Error('error: invalid function TodoDomGenerator call!');
  }
  this.elementId = elementId;
  const newDom = `
    <h2>${this.elementId}</h2>
    <ul class="content"></ul>
    <p>완료된 리스트의 갯수는 <strong class="completedTotalNumber"></strong>개입니다.</p>
    <h3>+</h3>
    <input type="text" name="addList" placeholder="add List" required />
    <button type="text" name="deleteAllList">모두 삭제</button>
  `;

  document.querySelector(`#${this.elementId}`).innerHTML += newDom;
}
export default TodoDomGenerator;
