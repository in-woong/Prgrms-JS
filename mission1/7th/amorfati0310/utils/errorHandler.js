function todoListErrorHandler(error) {
  switch (error.name) {
    case 'NotArray': {
      alert('todos 가 배열로 안 들어왔네요!')
      return { action: 'initState' }
    }
    case 'NotComponentsElement': {
      alert('components element 옵션이 잘 못 되었어요')
      return { action: 'initState' }
    }
    case 'InvalidTodoItems': {
      console.log('부적절한 todoItem 있어서 filtered 합니다')
      return {
        action: 'filterInvalidTodos',
        payload: error.payload,
      }
    }
  }
}

export { todoListErrorHandler }
