export default function Loading(isLoading){
    const $target = document.querySelector('#loading');
    this.isLoading = isLoading;
    this.setState=(currentLoading)=>{
        this.isLoading = currentLoading;
        this.render();
    }
    this.render = () =>{
        $target.innerHTML = this.isLoading ? 'Loading...' : ''
    }
}