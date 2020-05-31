function App() {
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

    const inputText = document.querySelector('#todo-list-inputText');

    const jsInput = new TodoInput(jsList);
    const lifeInput = new TodoInput(lifeList);
    const tripInput = new TodoInput(tripList);

    const todoListMapper = {
        'js': {
            component: jsList,
            input: jsInput
        },
        'life': {
            component: lifeList,
            input: lifeInput
        },
        'trip': {
            component: tripList,
            input: tripInput
        }
    }
    
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
                todoListMapper[todoType.value].input.addInput(inputText.value)
                inputText.value = '';
            }
        }
    });
}
