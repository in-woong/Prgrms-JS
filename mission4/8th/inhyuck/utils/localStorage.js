import { errorHandler } from './errorHandler.js';

export default {
    getStorage({ key }) {
        try {
            return JSON.parse(window.localStorage.getItem(key));
        } catch (error) {
            errorHandler({ errorMessage: error.message });
        }
    },

    setStorage({ key, value }) {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            //저장공간을 초과하거나 브라우저설정에 따라 QUOTA_EXCEEDED_ERR 에러가 발생할 수 있음.
            errorHandler({ errorMessage: error.message });
        }
    }
}

