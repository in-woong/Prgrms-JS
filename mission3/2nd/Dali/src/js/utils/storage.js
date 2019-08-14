const saveLocalStorage = (key, keyword)=>{
  const savedData = JSON.parse(localStorage.getItem(key)) || [];
  savedData.push(keyword);
  localStorage.setItem(key, JSON.stringify([...new Set(savedData)]));
}

export {
  saveLocalStorage,
}
