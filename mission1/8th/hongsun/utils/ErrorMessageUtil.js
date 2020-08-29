import { TODO_ERROR_TYPE } from '../declares/enums.js';

class ErrorMessageUtil {
  static getTodoItemErrorMessage(errorType) {
    switch (errorType) {
      case TODO_ERROR_TYPE.INVALID_DATA:
        return 'Data must be Array type';
      case TODO_ERROR_TYPE.REQUIRED_PROPERTY:
        return 'Object Does not have a required property';
      case TODO_ERROR_TYPE.INVALID_PROPERTY:
        return 'Invalid property type';
      default:
        return 'Error occurred';
    }
  }
}

export default ErrorMessageUtil;
