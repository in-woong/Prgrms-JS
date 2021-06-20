window.storage = (function() {
    function save(key, data) {
        window.localStorage.setItem(key, JSON.stringify(data));
    }

    function load(key) {
        const defaultData = [];
        const loadedData = window.localStorage.getItem(key);

        try {
            if(loadedData) {
                return JSON.parse(loadedData);
            }
            return defaultData;
        } catch(e) {
            return defaultData;
        }
    }

    return {
        save,
        load
    }
})();
