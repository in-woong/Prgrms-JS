export function getItem(key) {
  try {
    return JSON.parse(localStorage.getItem(key));  
  } catch (_) {
    throw new Error('데이터가 json 타입이 아닙니다.');
  }
};

export function setItem({ key, value }) {
  try {
    localStorage.setItem(key, JSON.stringify(value));  
  } catch (_) {
    throw new Error('데이터 용량이 가득 찼습니다.');
  }
};
