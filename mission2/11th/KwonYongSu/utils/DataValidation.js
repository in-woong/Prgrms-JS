function dataValidation(data){
  // 데이터가 존재하지 않는 경우
  if(data == null || data == undefined){
    throw new Error('데이터가 존재하지 않습니다.');
  };
  // 데이터가 배열의 형태가 아닌 경우
  if(!Array.isArray(data)){
    throw new Error('데이터의 형태가 배열이 아닙니다.');
  };
  // 객체가 키로 'text'를 가지고 있지 않는 경우 또는 데이터가 객체가 아닌 경우
  if(data.some(item => !item.hasOwnProperty('text') ||  typeof item != 'object')){
    throw new Error('데이터가 올바르지 않습니다.');
  };
};

export default dataValidation;