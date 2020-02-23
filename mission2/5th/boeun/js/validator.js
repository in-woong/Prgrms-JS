const validateData = function(data) {

    if (data === undefined || data === null) {
        throw new Error('데이터가 정상적으로 입력되지 않았습니다.');
    }

    if (!Array.isArray(data)) {
        throw new Error('데이터 형식이 올바르지 않습니다.');
    }

    if (!data.every(todo => todo.hasOwnProperty('text') && todo.hasOwnProperty('isCompleted') && typeof todo.text === 'string')) { 
        throw new Error('데이터 포맷을 맞춰 주세요.');
    }    

    console.log('데이터에 이상없습니다 :)');
}



export {validateData};
