import { 
    checkInstance, 
    checkTarget, 
    checkDataTypes 
} from './validation.js';

export default function TodoList(data, $target, onAppDeleteTodo, onAppToggleTodo) {

    checkInstance(this);
    checkTarget($target);
    this.dataValidation = (data) => {
        checkDataTypes(data, (cbData) => typeof cbData._id === "string" && typeof cbData.content === 'string' && typeof cbData.isCompleted === 'boolean');
    }

    this.dataValidation(data);
    this.data = data;
    this.$todoWrap = $target;
    this.$todoList =  this.$todoWrap.querySelector("#todo-incompleted-list");
    this.$completedList =  this.$todoWrap.querySelector("#todo-completed-list");

    this.render = () => {
        const todoData = this.data.filter(({isCompleted}) => !isCompleted);
        const completedData = this.data.filter(({isCompleted}) => isCompleted);
        
        const todoListHtml = todoData
            .map(({_id, content, isCompleted}) => `<li data-index="${_id}" draggable="true" class="todo-item${isCompleted ? ' completed' : ''}"> ${content} <button data-index="${_id}" class="btn-delete">삭제</button></li>`)
            .join('');

        const completedListHtml = completedData
            .map(({_id, content, isCompleted}) => `<li data-index="${_id}" draggable="true" class="todo-item${isCompleted ? ' completed' : ''}"> ${content} <button data-index="${_id}" class="btn-delete">삭제</button></li>`)
            .join('');

        this.$todoList.innerHTML = `<ul>${todoListHtml}</ul>`;
        this.$completedList.innerHTML = `<ul>${completedListHtml}</ul>`
    }

    this.setState = (nextData) => {
        this.dataValidation(nextData);  // check newData validation
        this.data = nextData;
        this.render();
    }

    const dragStartHandler = (e) => {
        const dragElementType = e.target.classList.contains('completed') ? 'completed' : 'notCompleted';
        e.dataTransfer.setData('id', e.target.getAttribute('data-index'));
        e.dataTransfer.setData('type', dragElementType);
        e.dataTransfer.dropEffect = 'move';
        console.log(dragElementType);
    }

    const dragOverHandler = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    }

    const dropHandler = (e) => {
        e.preventDefault();
        const dragElementId = e.dataTransfer.getData('id');
        const dragElementType = e.dataTransfer.getData('type');
        const dropArea = e.target.parentNode.parentNode.getAttribute('id');

        if (dropArea === 'todo-completed-list' && dragElementType === 'notCompleted') {
            onAppToggleTodo(dragElementId);
        } else if (dropArea === 'todo-incompleted-list' && dragElementType === 'completed') {
            onAppToggleTodo(dragElementId);
        }

        console.log(dropArea);

        e.dataTransfer.clearData();
    }

    this.$todoWrap.addEventListener('dragstart', e => dragStartHandler(e));

    this.$todoWrap.addEventListener('dragover', e => dragOverHandler(e));

    this.$todoWrap.addEventListener('drop', e => dropHandler(e));

    this.$todoWrap.addEventListener('click', (e) => {
        // todo LI 요소를 클릭했을 경우 toggleTodo
        if (e.target && e.target.nodeName === 'LI') {
            const toggleIndex = e.target.getAttribute('data-index');
            onAppToggleTodo(toggleIndex);
        }
        // delete button 요소를 클릭했을 경우 deleteTodo
        if (e.target && e.target.nodeName === 'BUTTON') {
            const deleteIndex = e.target.getAttribute('data-index');
            onAppDeleteTodo(deleteIndex);
        }
    })
    
    this.render();
}
