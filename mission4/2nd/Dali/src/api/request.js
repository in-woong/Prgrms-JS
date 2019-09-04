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
  options,
  beforeRequest,
  finishRequest,
}) {
  try {
    if (validateFn(beforeRequest))beforeRequest();
    console.log(url, options);
    const defaultOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    const res = await fetch(url, { ...defaultOptions, ...options });
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
