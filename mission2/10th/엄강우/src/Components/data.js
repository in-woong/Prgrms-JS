export const data = [
    {
      text: 'JS 공부하기',
      isCompleted: true,
    },
    {
      text: 'JS 복습하기',
      isCompleted: false,
    },
  ];

export function addTodo(todoText){
    data.push({text: todoText, isCompleted: false})
}

export function changeTodoStatus(todoIndex){
    let newData = data.map((element, index) => (
      {...element , isCompleted : todoIndex === index ? !element.isCompleted : element.isCompleted }))
    return newData
}