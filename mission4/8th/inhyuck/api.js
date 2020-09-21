const END_POINT = 'https://todo-api.roto.codes';
const USER_NAME = 'inhyuck';

export function fetchTodoItems(callback) {
    fetch(`${END_POINT}/${USER_NAME}`)
      .then(res => res.json())
      .then(todoItems => {
          callback(todoItems.map(todoItem => {
              return {
                  text: todoItem.content,
                  isCompleted: todoItem.isCompleted,
              };
          }));
      });
}
