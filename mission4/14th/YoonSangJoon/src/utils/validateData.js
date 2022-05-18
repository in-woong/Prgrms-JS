import { errorMessages } from '../constant/index.js';

const { INVALID_TYPE, INVALID_ARRAY, INCORRENT_DATA } = errorMessages;

const validateText = (text) => {
  if (!text) throw new Error(INCORRENT_DATA);
};

const validateData = (data) => {
  if (!Array.isArray(data)) throw new Error(INVALID_ARRAY);
  if (data.some((item) => !item.text)) throw new Error(INVALID_TYPE);
};

export { validateText, validateData };
