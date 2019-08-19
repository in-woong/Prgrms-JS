export default class Model {
  constructor({ callbackFunc }) {
    const proxy = new Proxy(this, {
      get(target, prop) {
        return target[prop]
      },
      set(target, prop, value) {
        target[prop] = value

        callbackFunc()

        return true
      },
    })

    return proxy
  }
}
