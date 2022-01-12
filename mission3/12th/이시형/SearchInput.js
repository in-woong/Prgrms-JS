export default function SearchInput ({$target , searchData}) {
    this.$target = document.querySelector($target)
    let timer = 0;
    this.$target.addEventListener('input',(e)=>{
        const {value} = e.target
        timer && clearTimeout(timer)
        timer = setTimeout(()=>{value && searchData(value)},400)
    })
}
