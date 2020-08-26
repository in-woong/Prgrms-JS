const LocalStorage = window.localStorage;
const KEY_TODO_LIST = 'todolist';

function setObjectToLocalStorage(obj) {
    try {
        const str = JSON.stringify(obj);
        LocalStorage.setItem(KEY_TODO_LIST, str);
    } catch (e) {
        console.error(e);
    }
}

function getTodoListFromLocalStorage() {
    try {
        const items = LocalStorage.getItem(KEY_TODO_LIST);
        let list = [];
        console.log(items);
        if (items != null || items !== undefined) {
            list = JSON.parse(items);
        }
        return list;
    } catch (e) {
        console.error(e);
    }
}
