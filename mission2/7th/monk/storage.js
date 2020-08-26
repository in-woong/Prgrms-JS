const storage = {
  set: (key, value) => {
    //console.log(key, value);
    window.localStorage.setItem(key, JSON.stringify(value));
  },
  get: (key, defaultValue = []) => {
    try {
      const item = window.localStorage.getItem(key);
      if (!item) {
        return defaultValue;
      }
      return JSON.parse(item);
    } catch(e) {
      alert(e.message)
      return defaultValue;
    }
  }
}
