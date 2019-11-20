export const getTodoList = ({ userName }) => {
    return fetch(`http://todo-api.roto.codes/${ userName }`, {
        method: 'GET',
    }).then( res => {
        console.log(res)
        return res.json()} );
};

export const addTodoItem = ({ userName, item }) => {
    return fetch(`http://todo-api.roto.codes/${ userName }`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( item ),
    }).then( res => res.json() );
};

export const deleteTodoItem = ({ userName, todoId }) => {
    return fetch(`http://todo-api.roto.codes/${ userName }/${ todoId }`, {
        method: 'DELETE',
    }).then( res => res.json() );
};

export const setTodoItemStatus = ({ userName, todoId }) => {
    return fetch(`http://todo-api.roto.codes/${ userName }/${ todoId }/toggle`, {
        method: 'PUT',
    }).then( res => res.json() );
};