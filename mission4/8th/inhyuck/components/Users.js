/**
 * @param {string} $target
 * @param {object} initData
 * @param {string} initData.selectedUsername
 * @constructor
 */
import { fetchUsers } from '../api.js';

export default function Users({$target, initData}) {
    this.$target = $target;
    this.data = initData;

    this.render  = () => {
        if (!this.data.usernames || this.data.usernames.length === 0) {
            this.$target.innerHTML = '';
            return;
        }

        this.$target.innerHTML = `
            <h1>usernames</h1>
            <ul>
                ${this.data.usernames.map(username => {
                    return `<li>
                                <button type="button" class="${username === this.data.selectedUsername ? 'selected' : ''}">
                                    ${username}
                                </button>
                            </li>`;
                }).join('')}
            </ul>
        `;
        this.$target.querySelector('.selected').focus();
    };

    this.setState = (nextData) => {
        this.data = {
            ...this.data,
            ...nextData
        };
        this.render();
    };

    this.initialize = async () => {
        this.render();
        this.setState({
            usernames: await fetchUsers()
        });
    };

    this.initialize();
}
