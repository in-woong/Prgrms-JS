import App from "./src/components/App.js"
import TodoApi from "./src/api/TodoApi.js"

const data = JSON.parse(localStorage.getItem("todo")) || []

const app = new App({ $app: document.querySelector("#app"), initState: data })

const api = new TodoApi('JHKIM');
