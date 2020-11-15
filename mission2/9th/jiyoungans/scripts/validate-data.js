const ERR_CODE = new Map([
  ["INVALID", "올바르지 않은 값입니다."],
  ["NO_ARR", "array 형태가 아닙니다."],
  ["NO_NEW", "new 키워드로 선언되지 않았습니다."]
]);

export const checkNewKeyword = (ctx) => {
  if (ctx === window) {
    throw new Error(ERR_CODE.get("NO_NEW"));
  }
};

export const checkIsArray = (data) => {
  if (!Array.isArray(data)) {
    throw new Error(ERR_CODE.get("NO_ARR"));
  }
};

export const checkValue = (data) => {
  if (!data) {
    throw new Error(ERR_CODE.get("INVALID"));
  }
};

export const checkValueType = (data, checkCallBack) => {
  if (!data.every(checkCallBack)) {
    throw new Error(ERR_CODE.get("INVALID"));
  }
};
