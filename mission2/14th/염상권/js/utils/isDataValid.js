
const throwError = ({ description }) => { throw new Error(description) };

const checkIsArray = ({ todos, state }) => {

    if (!Array.isArray(todos)) { 
        state = { ...state, isValid: false, description: '전달된 인수는 배열이 아닙니다.' };
    }

    return state;
}

const checkTodoIsSutable = ({ todos, state }) => {

    const isSuitable = todos.every((todo) =>
                                    (todo.hasOwnProperty('id')) &&
                                    (todo.hasOwnProperty('text') && Boolean(todo.text)) &&
                                    (todo.hasOwnProperty('isCompleted') && typeof (todo.isCompleted) === 'boolean'));
                                
    if (!isSuitable) state = { ...state, isValid: false, description: 'todo의 요소가 적합하지 않습니다.' };

    return state;
}

export const checkValidate = ({ todos }) => {

    let state = {
        isValid: true,
        description: ''
    }

    state = checkIsArray({ todos, state });

    if (state.isValid) {
        state = checkTodoIsSutable({ todos, state });
    }

    return state;
};

export const isDataValid = ({ todos }) => {
    const { isValid, description } = checkValidate({ todos });

    if (!isValid) throwError({ description });
}