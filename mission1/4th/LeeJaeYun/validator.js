const validator = {
    errorThrow: function (message) {
        throw new Error(message);
    },
    isNotEmptyArray: function (list) {
        return Array.isArray(list) && !!list.length;
    },
    hasValidProperty: function (obj, property) {
        for(let prop in property) {
            if (!obj.hasOwnProperty(prop)) {
                return false;
            }
            if (typeof obj[prop] !==  property[prop]) {
                return false;
            }
        }
        return true;
    },
    isInstanceof: function(obj, cons) {
        return obj instanceof cons;
    }
};