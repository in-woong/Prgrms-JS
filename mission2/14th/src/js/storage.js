const insertTodo = (data)=>{
    const todoList = getAllTodoList();
    todoList.push(data);
    setTodoList(todoList);
}

const getAllTodoList = ()=>{
    return JSON.parse(localStorage.getItem('todoList') || '[]');
}

const updateCompleteTodo = (id)=>{
    const todoList = getAllTodoList();
    todoList[id].isCompleted = !todoList[id].isCompleted;
    setTodoList(todoList);
}

const setTodoList = (todoList=[])=>{
    localStorage.setItem('todoList',JSON.stringify(todoList));
}

const removeTodoAll = ()=>{
    localStorage.setItem('todoList','[]');
}

const removeTodo = (id)=>{
    const todoList = getAllTodoList();
    todoList.splice(id,1);
    setTodoList(todoList);
}

const getTodoSituation = ()=>{
    const todoList = getAllTodoList();
    const completeTodoCount = todoList.filter(({isCompleted})=> isCompleted).length;
    const totalTodoCount = todoList.length;

     return {completeTodoCount,totalTodoCount};
}

export {insertTodo,getAllTodoList,updateCompleteTodo,removeTodoAll,removeTodo,getTodoSituation};

