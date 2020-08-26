export const checkTarget = ($target) => {
  if (!$target) {
    throw new Error(`엘리먼트가 존재하지 않습니다.`);
  }
};

export const checkNode = ($target, nodeName) => {
  if ($target.nodeName !== nodeName) {
    throw new Error(`<${nodeName}>이(가) 아닙니다.`);
  }
};

export const checkTypeArray = (data) => {
  if (!Array.isArray(data)) {
    throw new Error(`type이 Array가 아닙니다.`);
  }
};

export const checkTypeFunction = (func) => {
  if (!func || typeof func !== 'function') {
    throw new Error(`type이 Function이 아닙니다.`);
  }
};
