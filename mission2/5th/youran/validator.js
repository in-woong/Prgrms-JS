const ERROR_MESSAGE_TARGET = '#error-message';

function isValidTargetId(targetId) {

  if(!targetId || !typeof targetId === "string" || targetId.length < 1) {
    throw new Error("target id가 올바르지 않습니다.");
  }

  const $domWithGivenId = document.querySelectorAll(`#${targetId}`);
  if(!$domWithGivenId || $domWithGivenId.length !== 1) {
    throw new Error("target element를 찾을 수 없습니다.");
  }
}

function isValidData(data) {

  if(!Array.isArray(data)) {
    throw new Error("데이터 형식이 올바르지 않습니다.");
  }

  if(data.length === 0) {
    return;
  } 

  const isPlainObject = (item) => toString.call(item) === "[object Object]";
  const isString = (v) => typeof v === "string";
  if(!data.some((item) => isPlainObject(item) && isString(item.text))) {
    throw new Error("사용 가능한 데이터가 아닙니다.");
  }
} 

function showErrorMessage(error, targetSelector = ERROR_MESSAGE_TARGET) {
  document.querySelector(targetSelector).innerHTML = `ERROR! ${error.message}`;
  console.log(error);
}
