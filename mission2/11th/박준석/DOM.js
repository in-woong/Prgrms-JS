export const todoAppTemplate = ($id) => {
  return `
    <div id="todo-input">
      <p>추가할 일을 입력하세요</p>
      <input class="input_text" type="text">
      <input class="input_btn" type="button" value="확인">
    </div>
    <div id="todo-list"></div>
    <div id="todo-count"></div>
    `
}

export const todoNodeTemplate = (num, isCompleted, text) => {
  return `<li class="${num}" ${isCompleted ? `style="text-decoration:line-through"` : `""`}><input type="button" value="❌">
            <span>${text}</span></li>`
}

export const todoCountTemplate = (listLen, isDone) => {
  
}
