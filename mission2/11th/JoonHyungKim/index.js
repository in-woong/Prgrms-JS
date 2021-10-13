import App from "./components/App.js"

const data = JSON.parse(localStorage.getItem("todo")) || []

const app = new App({ $app: document.querySelector("#app"), initState: data })
