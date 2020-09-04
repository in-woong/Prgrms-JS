class App {
  $target
  jsTodoList
  csTodoList
  stTodoList

  constructor($target) {
    this.$target = $target

    this.jsTodoList = new TodoList({
      $target,
      initialData: [
        {
          text: 'JS 공부하기',
          isCompleted: true,
        },
        {
          text: 'JS 복습하기',
          isCompleted: false,
        },
      ],
    })

    this.csTodoList = new TodoList({
      $target,
      initialData: [
        {
          text: '운영체제 공부하기',
          isCompleted: true,
        },
        {
          text: '운영체제 복습하기',
          isCompleted: true,
        },
      ],
    })

    this.stTodoList = new TodoList({
      $target,
      initialData: [
        {
          text: '자료구조 공부하기',
          isCompleted: false,
        },
        {
          text: '자료구조 복습하기',
          isCompleted: false,
        },
      ],
    })
  }
}
