import Users from "./src/components/Users.js"
import App from "./src/components/App.js"

document.addEventListener("userSelected", ({ detail: user }) => {
    new App({ $app: document.querySelector("#app"), user })
})
new Users({ $list: document.querySelector("#list") })
