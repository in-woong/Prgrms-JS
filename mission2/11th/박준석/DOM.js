export const todoAppTemplate = () => {
  return `
    <div id="todo-input">
      <p>추가할 일을 입력하세요</p>
      <input class="input_text" type="text">
      <input class="input_btn" type="button" value="확인">
      <input class="removeall-btn" type="button" value="모두 삭제">
    </div>
    <div id="todo-list"></div>
    <div id="todo-count"></div>
    `
}

export const todoNodeTemplate = (num, isCompleted, text) => {
  return `<li class="${num}" ${isCompleted ? `style="text-decoration:line-through"` : `""`}><input class="rm-btn" type="button" value="❌">
            <span>${text}</span></li>`
}

export const todoCountTemplate = (listCnt, doneCnt) => {
  return `<br/><p>Todo Count : ${listCnt} </p><p>Done Count : ${doneCnt}</p>`
}