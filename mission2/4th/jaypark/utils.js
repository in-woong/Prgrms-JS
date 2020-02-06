const log = console.log
const validate = (msg, fn) => { if (fn()) throw new Error(msg); };