export function isEmpty(value) {
  // null 혹은 undefined거나 array가 아닌 형태로 넘어왔을 경우
  return value === null ||
    typeof value === 'undefined' ||
    (Array.isArray(value) && value.length < 1);
}
