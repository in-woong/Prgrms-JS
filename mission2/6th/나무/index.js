let jsData = [
    {
        text: 'JS 공부하기',
        isCompleted: true
    },
    {
        text: 'JS 복습하기',
        isCompleted: false
    }
];
let lifeData = [
    {
        text: '운동하기',
        isCompleted: false
    },
    {
        text: '펭tv보기',
        isCompleted: true
    }
];
let tripData = [
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
inputText.addEventListener('keypress', function (e) {
    if (e.keyCode === ENTER) {
        if (!/\S/.test(inputText.value) || inputText === null) {
            document.querySelector('#error-message').innerHTML = '할일을 입력하지 않았습니다.';
            return;
        }

        let todoType = document.querySelector('input[name="todo-type"]:checked');
        if (!todoType) {
            document.querySelector('#error-message').innerHTML = '할일을 추가할 리스트를 선택해 주세요';
            return;
        }
        
        switch (todoType.value) {
            case 'js':
                jsData.push({
                    text: inputText.value,
                    isCompleted: false
                });
                jsList.setState(jsData);
                break;
            case 'life':
                lifeData.push({
                    text: inputText.value,
                    isCompleted: false
                });
                lifeList.setState(lifeData);
                break;
            case 'trip':
                tripData.push({
                    text: inputText.value,
                    isCompleted: false
                });
                tripList.setState(tripData);
                break;
            default:
                break;
        }
    }
});

const doneButtons = document.querySelectorAll('.done-button');
doneButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        //흠
    });
});
