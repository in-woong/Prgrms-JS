export const todoAppTemplate = () => {
  return `
      <p>추가할 일을 입력하세요</p>
      <div "todo-list_inputdiv">
        <form class="todo-list" style="display:inline">
          <input class="input_text" type="text">
          <button class="input_btn" type="submit">확인</button>
        </form>
        <button class="removeall-btn">모두 삭제</button>
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