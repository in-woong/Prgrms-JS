import TodoList from "../components/TodoList.js";

const ERR_CODE = new Map([
  ["NVL", "todo 값이 null입니다."],
  ["UND", "todo 값이 undefined입니다."],
  ["NO_ARR", "todo 값이 array 형태가 아닙니다."],
  ["NO_NEW", "TodoList가 new 키워드로 선언되지 않았습니다."],
  ["EVL", "todo 값이 빈 값입니다."]
]);

function validateDataList(param, definer = null) {
  if (definer && !(definer instanceof TodoList)) {
    throw new Error(ERR_CODE.get("NO_NEW"));
  }
  if (param == null) {
    throw new Error(ERR_CODE.get("NVL"));
  }
  if (typeof param === "undefined") {
    throw new Error(ERR_CODE.get("UND"));
  }
  if (!(param instanceof Array)) {
    throw new Error(ERR_CODE.get("NO_ARR"));
  }

  return true;
}

function validateData(param) {
  if (param == null) {
    throw new Error(ERR_CODE.get("NVL"));
  }
  if (param === "") {
    throw new Error(ERR_CODE.get("EVL"));
  }
}

export { validateDataList, validateData };
