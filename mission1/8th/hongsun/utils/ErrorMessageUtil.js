import { ERROR_TYPE } from '../declares/enums.js';

class ErrorMessageUtil {
  static getTodoItemErrorMessage(errorType) {
    switch (errorType) {
      case ERROR_TYPE.INVALID_DATA:
        return 'Data must be Array type';
      case ERROR_TYPE.REQUIRED_PROPERTY:
        return 'Object Does not have a required property';
      case ERROR_TYPE.INVALID_PROPERTY:
        return 'Invalid property type';
      default:
        return 'Error occurred';
    }
  }
}

export default ErrorMessageUtil;
