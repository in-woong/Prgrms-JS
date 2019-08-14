function isOutBounds(length, idx) {
  return length <= idx || idx < 0;
}

function isValidItemShape(obj) {
  if (obj === null || obj === undefined) {
    return false;
  }
  const hasValidCompleted = obj.hasOwnProperty("isCompleted") && typeof obj.isCompleted === "boolean";
  const hasValidText = obj.hasOwnProperty("text") && typeof obj.text === "string";
  return hasValidCompleted && hasValidText;
}
