export const getTodoData = function () {
  try {
    return localStorage.getItem('data')
      ? JSON.parse(localStorage.getItem('data'))
      : [];
  } catch (err) {
    console.error(err);
  }
};

export const setTodoData = function (state) {
  try {
    localStorage.setItem('data', JSON.stringify(state.data));
  } catch (err) {
    console.error(err);
  }
};
