const END_POINT = 'https://todo-api.roto.codes';
const USER_NAME = 'inhyuck';

const defaultApi = {
    get: async (path) => {
        const res = await fetch(`${path}`);
        return await res.json();
    },
};

export async function fetchTodoItems() {
    const fetchedTodoItems = await defaultApi.get(`${END_POINT}/${USER_NAME}`);
    return fetchedTodoItems.map(todoItem => {
        return {
            text: todoItem.content,
            isCompleted: todoItem.isCompleted,
        };
    });
}
