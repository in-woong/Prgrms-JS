function validateType(data) {
  //데이터 타입 체크
  if (typeof data === 'undefined') {
    throw new TypeError('data is undefined');
  }
  if (data === null) {
    throw new TypeError('data is null');
  }
  if (!Array.isArray(data)) {
    throw new TypeError('data type is not array');
  }
  return true;
}

function validateFormat(data) {
  //데이터 내용 체크 (형식,key값)
  data.some((list, index) => {
    //타입체크
    if (list.constructor !== Object) {
      throw new TypeError(index + ' index data type is not Object');
    }
    //키 포함 여부체크
    if (!(list.hasOwnProperty('text') && list.hasOwnProperty('isCompleted'))) {
      throw new ReferenceError(index + " index data doesn't have the required key value.");
    }
  });
  return true;
}
