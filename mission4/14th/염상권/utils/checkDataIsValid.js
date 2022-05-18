const throwError = ({ description }) => { throw new Error(description) };

const checkIsArray = ({ todos, state }) => {
    // 전달된 인수가 배열인지 확인하는 함수.
    if (!Array.isArray(todos)) {
         state = { ...state, isValid: false, description: '전달된 인수는 배열이 아닙니다.' };
    };

    return state;
}

const checkTodoIsValid = ({ todos, state }) => { 
    // Todo의 요소가 적합한지 확인하는 함수.
    const isSuitable = todos.every((todo) =>
                                (todo.hasOwnProperty('_id')) &&
                                (todo.hasOwnProperty('content')) &&
                                (todo.hasOwnProperty('isCompleted') && typeof (todo.isCompleted) === 'boolean'));

    if (!isSuitable) state = { ...state, isValid: false, description: 'todo의 요소가 적합하지 않습니다.' };

    return state;
}

const checkUserValidate = ({ user }) => { 
    if (typeof (user) !== 'string') return { isValid: false, description: 'user의 타입은 string이어야 합니다.' };

    return { isValid: true, description: '' };
}

export const isUserDataValid = ({ user }) => { 

    const state = checkUserValidate({ user });

    if (!state.isValid) throwError({ description: state.description });
}

export const isDataValid = ({ todos }) => {

    let state = {
        isValid: true,
        description: '',
    };

    state = checkIsArray({ todos, state });

    if (state.isValid) {
        state = checkTodoIsValid({ todos, state });
    }

    if (!state.isValid) throwError({ description: state.description });
    
}
