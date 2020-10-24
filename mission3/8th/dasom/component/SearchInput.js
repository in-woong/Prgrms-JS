export default function SearchInput($target, setImageData, setHistoryData){
    this.$target = $target;
    this.data;
    this.inputEventListener = () => {

      let timer;
      window.addEventListener('go-search', (e)=>{
        const that = this;
        const word = e.detail.searchWord;
        const isKeydown = e.detail.isKeydown;
        if(timer){
          clearTimeout(timer);
        }
        timer = setTimeout(()=>{
          that.goSearch(word, isKeydown);
        }, 1000);
      });

      this.$target.addEventListener('keyup', (e) => { 
        if(e.target.value.trim() != ''){
          window.dispatchEvent(new CustomEvent('go-search', {detail: {
            searchWord: e.target.value, isKeydown: true}}));
        }
      });

    }
    

    this.goSearch = async (word, isKeydown) => {
      await fetch(`https://jjalbot.com/api/jjals?text=${word}`)
        .then(x => x.json())
        .then(data => {
          setImageData(data);
          isKeydown ? setHistoryData(word) : '';
        })
        .catch(error => console.error('Error:', error));
      }


    this.inputEventListener();
}