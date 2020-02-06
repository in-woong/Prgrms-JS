const validator = {
    throwError: function(message) {
      throw new Error(message);
    },
    isNotArray: function(data) {
        return (data === null || data === undefined || !Array.isArray(data));
    },
    isValidContent: function(data, dataFormat) {
            for(let prop in dataFormat) {
                if (!data.hasOwnProperty(prop)) {
                    return false;
                }
                if (typeof data[prop] !== dataFormat[prop]) {
                    return false;
                }
            }
            return true;
    },
    isInstanceOf: function(instance, origin) {
        return instance instanceof origin;
    }
};