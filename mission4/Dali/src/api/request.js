import HttpError from '../utils/HTTPError.js';
import { isFunction } from '../utils/typeCheck.js';

const validateFn = fn => fn && isFunction(fn);

const validateResponse = (res) => {
  if (!res.ok) {
    throw new HttpError(res);
  }
  return res;
};
const responseAsJson = res => res.json();

const httpLog = data => console.log('Network success: Log', data);

const logError = error => console.log('Error:', error);
async function request({
  url,
  options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  },
  beforeRequest,
  finishRequest,
}) {
  try {
    if (validateFn(beforeRequest))beforeRequest();
    const res = await fetch(url, options);
    const validateRes = await validateResponse(res);
    const jsonData = await responseAsJson(validateRes);
    if (validateFn(finishRequest))finishRequest();
    httpLog(jsonData);
    return jsonData;
  } catch (error) {
    logError(error);
    throw new HttpError(error);
  }
}

export default request;
