function UserName({
    currentUser
}) {
    this.username = currentUser
    const userH2 = document.getElementById('list-owner-name')

    this.render = () => {
        userH2.innerHTML = `${this.username}님의 할일`
    }

    this.setState = (nextUser) => {
        this.username = nextUser
        this.render()
    }

    this.render()
}
export default UserName;
