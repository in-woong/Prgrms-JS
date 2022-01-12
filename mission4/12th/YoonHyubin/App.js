import TodoTitle from './TodoTitle.js';
import RemoveAllButton from './RemoveAllButton.js';
import TodoList from './TodoList.js';
import TodoInput from './TodoInput.js';
import { fetchData, toggleTodo, deleteTodo, insertTodo, deleteAllTodos } from './api.js';
import { getUserName, isReadOnly } from './system.js';

export default function App({ $target }) {
    this.state = [];
    let isInitialized = false;

    const todoTitle = new TodoTitle({ $target });

    const removeAllButton = new RemoveAllButton({
        $target,
        onRemoveAll: async function () {
            await deleteAllTodos();
            app.refresh();
        }
    });

    const onClick = async function (todoId) {
        await toggleTodo(todoId);
        this.refresh();
    }.bind(this);

    const onRemove = async function (todoId) {
        await deleteTodo(todoId);
        this.refresh();
    }.bind(this);

    const onDrop = async function ({ todoId, dragDivId, dropDivId }) {
        if (dragDivId === dropDivId) return;

        await toggleTodo(todoId);
        this.refresh();
    }.bind(this);

    const completedTodoList = new TodoList({
        $target,
        id: 'completed',
        data: this.state.filter(todo => todo.isCompleted),
        onClick,
        onRemove,
        onDrop
    });

    const incompletedTodoList = new TodoList({
        $target, 
        id: 'incompleted',
        data: this.state.filter(todo => !todo.isCompleted),
        onClick,
        onRemove,
        onDrop
    });
    
    const todoInput = new TodoInput({
        $target,
        onInput: async function (todoText) {
            await insertTodo(todoText);
            app.refresh();
        }
    });

    this.refresh = async function() {
        this.state = await fetchData();
        todoTitle.setState({
            userName: getUserName(),
            isReadOnly: isReadOnly()
        });

        incompletedTodoList.setState(this.state.filter(todo => !todo.isCompleted));
        completedTodoList.setState(this.state.filter(todo => todo.isCompleted));

        incompletedTodoList.setDisabled(isReadOnly());
        completedTodoList.setDisabled(isReadOnly());
        removeAllButton.setDisabled(isReadOnly());
        todoInput.setDisabled(isReadOnly());

        if (isInitialized === false)
        {
            removeAllButton.render();
            incompletedTodoList.render();
            completedTodoList.render();
            todoInput.render();
            isInitialized = true;
        }
    }
    
    this.refresh();
}
