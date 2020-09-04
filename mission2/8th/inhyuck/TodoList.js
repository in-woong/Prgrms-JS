const data = [
    {
        text: 'JS 공부하기',
        isCompleted: false,
    },
    {
        text: 'JS 복습하기',
        isCompleted: true,
    },
];

const nextData = [
    {
        text: 'HTML/CSS 공부하기',
        isCompleted: false,
    },
];

const developerTodoItems = [
    {
        text: 'JS 스터디 열심히 참여하며 배운내용 잘 정리',
        isCompleted: true,
    },
    {
        text: '사이드 프로젝트 개선',
        isCompleted: false,
    },
];

const nextDeveloperTodoItems = [
    {
        text: 'HTTP 공부',
        isCompleted: true,
    },
];

const happyLifeTodoItems = [
    {
        text: '책 읽고 간단히라도 글 쓰기',
        isCompleted: true,
    },
    {
        text: '규칙적인 아침 기상',
        isCompleted: false,
    },
    {
        text: '조급해하지 않기',
        isCompleted: true,
    },
];

const nextHappyLifeTodoItems = [
    {
        text: '규칙적인 운동',
        isCompleted: false,
    },
];

function TodoList({ todoItems, selector }) {
    if (!(this instanceof TodoList)) {
        errorHandler({ errorMessage: 'not exist new keyword' });
    }
    const $todoList = document.querySelector(selector);
    if (!$todoList) {
        errorHandler({ errorMessage: 'target element is not found' });
    }
    validateTodoItems({ todoItems });

    this.todoItems = todoItems;
    this.$todoList = $todoList;

    this.render = function () {
        this.$todoList.innerHTML = `<ul>
                  ${this.todoItems.map((todoItem) => convertTodoItemToInnerHtml({ todoItem })).join('')}
            </ul>`;
    };
    this.setState = function ({ nextTodoItems }) {
        validateTodoItems({ todoItems: nextTodoItems });

        this.todoItems = nextTodoItems;
        this.render();
    };
    this.addTodoItem = function ({ todoItemText }) {
        const newTodoItem = {
            text: todoItemText,
            isCompleted: false,
        };
        validateTodoItem({todoItem: newTodoItem});

        this.todoItems.push(newTodoItem);
        this.render();
    };

    this.render();
}

function convertTodoItemToInnerHtml({ todoItem }) {
    const { text, isCompleted } = todoItem;
    return `
          <li>
            ${isCompleted ? `<s>${text}</s>` : text}
          </li>
        `;
}

function validateTodoItems({ todoItems }) {
    if (!todoItems) {
        errorHandler({ errorMessage: 'todoItems is empty' });
    }

    if (!Array.isArray(todoItems)) {
        errorHandler({ errorMessage: 'todoItems is not Array' });
    }

    todoItems.forEach((todoItem) => validateTodoItem({ todoItem }));
}

function validateTodoItem({ todoItem }) {
    const { text, isCompleted } = todoItem;

    if (typeof text !== 'string' || text.trim() === '') {
        errorHandler({ errorMessage: 'text value is empty or is not string type' });
    }

    if (typeof isCompleted !== 'boolean') {
        errorHandler({ errorMessage: 'isCompleted value is empty or is not boolean type' });
    }

    return true;
}

function errorHandler({ errorMessage }) {
    throw new Error(errorMessage);
}
