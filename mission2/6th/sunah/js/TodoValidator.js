validateData = function(data) {
    if(data === null || data === undefined) {
        throw new Error('data 값을 전달해주세요.');
    } else if(!Array.isArray(data)) {
        throw new Error('data 는 배열형태입니다.');
    } else {
        data.forEach(item => {
            if(!item.hasOwnProperty('text')) {
                throw new Error('data는 text 속성값을 가지고 있어야합니다.');
            } else if (typeof item.text !== 'string') {
                throw new Error('data는 text 속성은 string 타입입니다.');
            }

            if (item.isCompleted !== undefined && typeof item.isCompleted !== 'boolean')
                throw new Error('data는 isCompleted 속성은 boolean 타입입니다.');
        });
    }
}

validateSelector = function(selector) {
    if(document.querySelector(selector) === null) {
        throw new Error('해당 element 가 존재하지 않습니다.');
    }
}