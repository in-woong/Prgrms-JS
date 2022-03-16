// 'TodoCount' 컴포넌트 작성하기 (#77)
function TodoCount(ObjArrayData) {
  const todoCountElement = document.querySelector('#todo-count')
  todoCountElement.innerHTML = `
  총 Todo의 갯수: ${ObjArrayData.length}
  완료처리된 Todo의 갯수: ${
    ObjArrayData.filter((obj) => obj.isCompleted).length
  }
  `
}

export default TodoCount
