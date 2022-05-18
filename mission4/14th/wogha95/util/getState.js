export const getTodoList = (state) => {
  return state.filter(({isCompleted}) => {
    return !isCompleted;
  })
}

export const getCompletedTodoList = (state) => {
  return state.filter(({isCompleted}) => {
    return isCompleted;
  })
}

export const getTodoCount = (state) => {
  let total = 0;
  let completed = 0;
  for(const {isCompleted} of state) {
    total += 1;
    if(isCompleted) completed += 1;
  }
  return [total, completed];
}