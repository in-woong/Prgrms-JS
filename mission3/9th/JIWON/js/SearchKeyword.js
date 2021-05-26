export default function SearchKeyword(target, inputKeyword){
  this.inputKeyword = inputKeyword;

  let timer;

  target.addEventListener('keyup', e => {
    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      if(e.target.value){
        this.inputKeyword(e.target.value);
        console.log(e.target.value);
      }
    }, 200)
  
  })

}
