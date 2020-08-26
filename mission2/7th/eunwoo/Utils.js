function isArray(obj) {
    return !!obj && obj.constructor === Array;
}

function removeDataFromArray(arr, data) {
    return arr.filter(elem => elem.id !== data.id);
}

function makeId() {
    const MAX_LIST = 1000;
    return Math.floor(Math.random() * MAX_LIST);
}
