export default function TodoCount($app, [totalCount, completedCount]) {  // TodoCount 컴포넌트 #77
  const $todoCount = $app.querySelector('#todo-count');

  this.render = ([totalCount, completedCount]) => {
    $todoCount.innerText = `총 : ${totalCount} / 완료 : ${completedCount}`;
  }

  this.render([totalCount, completedCount]);
}