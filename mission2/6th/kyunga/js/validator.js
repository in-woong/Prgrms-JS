function validateData(data) {
    if (!data) {
        throw new Error('데이터를 입력해주세요!')
    }

    if (!(data instanceof Array)) {
        throw new Error('데이터의 형태가 배열이 아닙니다!');
    }

    data.forEach(item => {
        if (!item.text || typeof item.text !== 'string')
            throw new Error('text 프로퍼티의 타입은 꼭 string 이어야 합니다!');

        if (typeof item.isCompleted !== 'boolean')
            throw new Error('isCompleted 프로퍼티의 타입은 꼭 boolean 이어야 합니다!');
    });

    return true;
}

function validateInstance(thisObject, component) {
    if (!(thisObject instanceof component)) {
        throw new Error(`new 키워드가 필요합니다!`);
    }
}

export { validateData, validateInstance }
