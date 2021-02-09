const data = getData("todo") || [];

new App(document.querySelector("#todo-list"), data);
