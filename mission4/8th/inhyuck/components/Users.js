/**
 * @param {string} $target
 * @param {object} initData
 * @param {string} initData.selectedUsername
 * @constructor
 */
import { fetchUsers } from '../api.js';

export default function Users({$target, initData, onChangeUser}) {
    this.$target = $target;
    this.data = initData;

    this.$target.addEventListener('click', async (event) => {
        const {clickAction, index} = event.target.dataset;
        if (clickAction === 'changeUser') {
            await onChangeUser(this.data.usernames[index]);
        }
    });

    this.render  = () => {
        if (!this.data.usernames || this.data.usernames.length === 0) {
            this.$target.innerHTML = '';
            return;
        }

        this.$target.innerHTML = `
            <h2><mark>usernames</mark></h1>
            <ul>
                ${this.data.usernames.map((username, index) => {
                    return `<li>
                                <button type="button" data-click-action="changeUser" data-index="${index}" class="${username === this.data.selectedUsername ? 'selected' : ''}">
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
        this.setState({
            usernames: await fetchUsers()
        });
    };

    this.initialize();
}
