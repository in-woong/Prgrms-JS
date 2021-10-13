export const getTodosFromLocalStorage = () => {
    try {
        return JSON.parse(localStorage.getItem('todos'));
    } catch(e) {
        new Error(e);
    };
};

export const setTodosFromLocalStorage = (todos) => {
    try {
        localStorage.setItem('todos', JSON.stringify(todos));
    } catch(e) {
        new Error(e);
    };
};
