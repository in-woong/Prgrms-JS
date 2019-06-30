const proxyState = (state, context, config) => {
  return new Proxy(state, {
    set: function(obj, prop, newval) {
      obj[prop] = [...newval];
      if (config[prop]) {
        config[prop]();
      } 
      return true;
    }.bind(context)
  });
}

export {
  proxyState, 
}