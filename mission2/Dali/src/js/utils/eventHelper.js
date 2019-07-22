import typeChecker from './typeChecker.js';
import errorHelper from './errorHelper.js';
import { ERROR_TYPE }from './errorMessage.js';

export default (function() {
  // 위에 상태를 갖는 방식이 별로 안 좋은 것 같은데 더 좋게 해결할 수 있는 방법 없을까?
  let timer = null;
  function debounce(handler,  cycle = 200) {
    try {
      errorHelper.throwErrorByFalsy(
        typeChecker.isFunction(handler,
          ERROR_TYPE.REQUIRED_FUNCTION)
      );
    }
    catch(error){
      console.log(error);
    }
    if(timer){
        clearTimeout(timer)
    }
    timer = setTimeout(handler, cycle)
  }
  return {
    debounce
  };
})()
