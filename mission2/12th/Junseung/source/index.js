import TodoModel from "./model.js";
import App from "./app.js";

function main(){
    const todoModel = new TodoModel();
    new App(todoModel);
}

main();