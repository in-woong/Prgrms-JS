const jsData = [
    {
        text: 'JS 공부하기',
        isCompleted: true
    },
    {
        text: 'JS 복습하기',
        isCompleted: false
    }
];
const lifeData = [
    {
        text: '운동하기',
        isCompleted: false
    },
    {
        text: '펭tv보기',
        isCompleted: true
    }
];
const tripData = [
    {
        text: 'NY',
        isCompleted: true
    },
    {
        text: 'HW',
        isCompleted: false
    }
];
const jsList = new TodoList(document.getElementById('todo-list-js'), jsData);
const lifeList = new TodoList(document.getElementById('todo-list-life'), lifeData);
const tripList = new TodoList(document.getElementById('todo-list-trip'), tripData);

const todoListMapper = {
    'js': {
        component: jsList,
        data: jsData
    },
    'life': {
        component: lifeList,
        data: lifeData
    },
    'trip': {
        component: tripList,
        data: tripData
    }
}

const inputText = document.querySelector('#todo-list-inputText');
inputText.addEventListener('keypress', function (e) {
    if (e.keyCode === ENTER) {
        e.preventDefault();
        
        if (!/\S/.test(inputText.value) || inputText === null) {
            document.querySelector('#error-message').innerHTML = '할일을 입력하지 않았습니다.';
            return;
        }

        const todoType = document.querySelector('input[name="todo-type"]:checked');
        if (!todoType) {
            document.querySelector('#error-message').innerHTML = '할일을 추가할 리스트를 선택해 주세요';
            return;
        }
        
        if (todoListMapper[todoType.value]) {
            todoListMapper[todoType.value].data.push({
                text: inputText.value,
                isCompleted: false
            });

            todoListMapper[todoType.value].component.setState(todoListMapper[todoType.value].data)
        }
    }
});

const removeButtons = document.querySelectorAll('.remove-button');
removeButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        const $div = e.target.closest('.todo-item')
        const { index } = $div.dataset
        //TODO: Todo list 별로 하려면 Todolist 객체를 받아와야 할것같은데?
    });
});
