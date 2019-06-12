export default (function() {
    function isArray(data) {
      return Array.isArray(data);
    }
    function isInstance(instance, Class) {
      return instance instanceof Class;
    }
    function throwError(msg) {
      throw new Error(msg);
    }
    function isNot(val) {
      return !val;
    }
    function throwErrorByFalsy(val, message) {
      if (isNot(val)) throwError(message);
      return this;
    }
    return {
      isArray,
      isInstance,
      isNot,
      throwError,
      throwErrorByFalsy
    };
})()


