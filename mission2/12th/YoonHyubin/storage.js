const storageItemName = 'todo-list';

function setStorageData(data) {
    window.localStorage.setItem(storageItemName, JSON.stringify(data));
}

function getStorageData() {
    try
    {
        return JSON.parse(window.localStorage.getItem(storageItemName));
    }
    catch (err)
    {
        return [];
    }
}
