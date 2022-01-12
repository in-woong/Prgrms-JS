import App from './App.js'
import Users from './Users.js'
import { getUsers } from './api.js';
import { changeUser } from './system.js';

const app = new App({ $target: document.querySelector('#app')});

(async function () {
    new Users({
        $target: document.querySelector('#users'),
        data: await getUsers(),
        onClick: async function (user) {
            await changeUser(user);
            app.refresh();
        }
    });
})();
