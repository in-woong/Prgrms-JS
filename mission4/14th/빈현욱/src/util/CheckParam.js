//보너스: 올바른 파라메터가 아닐경우 체크용
export const checkParam = (value) => {
  if (!Boolean(value)) {
    return false;
  }
  if(!value.every((item) => (typeof item.content === 'string') && (typeof item.isCompleted === 'boolean'))){
    return false;
  }
  return true;
};
