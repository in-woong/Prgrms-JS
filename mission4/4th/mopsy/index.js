import UserPage from './page/UserPage.js';
import TodoPage from './page/TodoPage.js';

function App({ $target }) {
    this.$target;
    this.$spinner;
    this.userPage;
    this.todoPage;
    this.spinner;

    this.changePage = e => {
        if (e.detail.pageName === 'user') {
            this.userPage.load();
        }
        if (e.detail.pageName === 'todo') {
            this.todoPage.init({
                $target: this.$target,
                username: e.detail.username || '',
            })
        }
    }

    this.init = async () => {
        this.$target = $target;
        this.$target.addEventListener('changePage', this.changePage);

        this.userPage = new UserPage();
        this.todoPage = new TodoPage();

        this.userPage.init({
            $target: this.$target,
        });
    }
    
    this.init();
}

const $app = document.getElementById('app');
new App({ $target: $app });
