new App($('#app'), LocalStorage.get('todos') === null ? [] : LocalStorage.get('todos'))
