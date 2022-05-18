//만들었지만 timeout이 함수내 지역변수라 계속 초기화가 되는 부분, 어떻게 처리하면 좋을지 고민이 필요하다.
export function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

export async function getApiData(keyword, callback) {
  if (keyword) {
    try {
      await fetch(`https://jjalbot.com/api/jjals?text=${keyword}`)
        .then((x) => x.json())
        .then((data) => {
          callback(data);
        });
    } catch (error) {
      return new Error('요청을 확인해주세요');
    }
  } else {
    //input 필드가 비워졌을때
    callback([]);
  }
}
