import UserList from '../component/UserList.js';

function UserPage() {
    this.userList;
    this.$userContainer;
    this.$target;

    this.init = ({ $target }) => {
        this.$target = $target
        this.userList = new UserList({
            $target: this.$target,
        });
    }

    this.load = () => {
        this.userList.init(this.$target);
    }
}

export default UserPage;
