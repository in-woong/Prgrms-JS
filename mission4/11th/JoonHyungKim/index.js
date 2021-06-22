import Users from "./src/components/Users.js"
import App from "./src/components/App.js"

document.addEventListener("userSelected", ({ detail }) => {
    new App({ $app: document.querySelector("#app"), user: detail })
})
new Users({ $list: document.querySelector("#list") })
