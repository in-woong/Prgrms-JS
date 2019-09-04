export default class Model {
  constructor({ callbackFunc }) {
    const proxy = new Proxy(this, {
      get(target, prop) {
        return target[prop]
      },
      set(target, prop, value) {
        const stringify = obj => JSON.stringify(obj)
        const prevData = target[prop]
        target[prop] = value

        if (stringify(value) !== stringify(prevData)) {
          callbackFunc()
        }

        return true
      },
    })

    return proxy
  }
}
