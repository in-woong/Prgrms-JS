import App from "./App.js";

try {
    const todoList = new App('TODO-LIST', 'une9');
} catch(e) {
    console.error(e);
}
