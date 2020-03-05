export const checkError = {
  isInvalidInstance(thisObj, Component) {
    if (!(thisObj instanceof Component)) {
      throw new Error("new 키워드로 생성해주세요");
    } else return thisObj;
  },
  isNil(data) {
    if (!data) throw new Error("올바르지 않은 데이터 입니다.");
    else return data;
  },
  isEmptyText(text) {
    if (text.trim() === "") {
      alert("빈 값은 입력할 수 없습니다.");
      throw new Error("빈 텍스트 입니다.");
    } else return text;
  },
  isNotArray(data) {
    if (!Array.isArray(data)) {
      throw new Error("데이터 타입이 배열이 아닙니다.");
    } else return data;
  },
  isInvalidData(data) {
    data.some(todo => {
      if (!todo.hasOwnProperty("text") || typeof todo.text !== "string") {
        throw new Error("데이터 형식이 올바르지 않습니다");
      } else return data;
    });
  },
  isMe(username) {
    if (username !== "seongjin") {
      throw new Error("해당 투두에 대한 접근 권한이 없습니다.");
    }
  }
};
