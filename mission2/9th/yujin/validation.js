
  export const checkArray = (data) => {
    if(!Array.isArray(data)) {
        throw console.error('its not a right type of data');
    }
  }
  export const checkTarget = ($target) => { 
      if (!$target){
          throw new Error('target이 올바르지 않습니다')
      }
  }

  // 잘모르겠네
  export const checkNewKeyword = (context) => {
    if (context === window) {
        throw new Error('new 키워드가 없음')
      }
  }

  //object들의 타입 체크. checkCallback-콜백함수
  export const checkTypes = (data , checkCallback) => {
    if (!data.some(checkCallback)) {
        throw new Error('data의 type들이 맞지 않습니다.')
      }
  }
