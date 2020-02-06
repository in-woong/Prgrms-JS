const validator = {
  isNull(data) {
    if(data === null)
        throw new Error('null입니다');

    return data;
  },
  isUndefined(data) {
    if(data === undefined)
        throw new Error('undefined입니다');

    return data;
  },
  isArray(data) {
    if(!Array.isArray(data))
        throw new Error('배열 형태가 아닙니다');
    
    return data;
  },
  isEmptyArray(data) {
    if(!data.length)
        throw new Error('빈 배열 입니다');

    return data;
  },
  isValidForm(data) {
    data.forEach(item => {
        if(!item.hasOwnProperty('text') || typeof item.text !== 'string')
            throw new Error('올바른 데이터 형식이 아닙니다');
    });

    return data;
  },
  isEmptyText(text) {
    if(!text.length)
        throw new Error('빈 텍스트입니다');
    
    return text;
  },
  isValidInstance(thisObj, Component) {
    if(!(thisObj instanceof Component))
        throw new Error('인스턴스가 아닙니다');
    
    return thisObj;
  },
  isValidData(data) {
    if(this.isNull(data) && this.isUndefined(data) && this.isArray(data) && this.isValidForm(data))
        return data;
  }
};

export default validator;