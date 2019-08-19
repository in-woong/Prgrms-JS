export default class Model {
  constructor({ callback }) {
    const proxy = new Proxy(this, {
      get(target, prop) {
        return target[prop]
      },
      set(target, prop, value) {
        target[prop] = value
        callback(prop, value)

        return true
      },
    })

    return proxy
  }
}
