const reg = /([a-zA-Z0-9])\w+/;

export default function isStrValidation(str) {
  return reg.test(str);
}