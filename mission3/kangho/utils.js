const proxyState = (state, context, config) => {
  const ret = new Proxy(state, {
    set: function(obj, prop, newval) {
      obj[prop] = [...newval];
      if (config[prop]) {
        config[prop]();
      } 
      return true;
    }.bind(context)
  });
  
  Object.keys(config).forEach(key => ret[key] = state[key]);

  return ret;
}

export {
  proxyState, 
}