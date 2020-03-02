function loadingView ($target, flag) {
    this.flag = flag

    this.init = () => {
        this.render()
    }

    this.render = () => {
        this.flag ? $target.innerHTML = `<img src="./img/loading.gif" width="50" alt="loading">` : $target.innerHTML = `` 
    }

    this.setState = (nextData) => {
        this.flag = nextData
        this.render()
    }

    this.init()
}
export default loadingView
