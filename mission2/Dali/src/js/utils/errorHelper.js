export default (function() {
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
    isNot,
    throwError,
    throwErrorByFalsy
  };
})();
