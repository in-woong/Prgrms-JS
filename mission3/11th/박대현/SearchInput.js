export default function(){
  const $input = document.createElement('input');

  const onLoadData = func => async (e) => {
    if(e.target.value==='') return;
    try {
      const response = await fetch(`https://jjalbot.com/api/jjals?text=${e.target.value}`)
      const data = await response.json();
      func(data);
    } catch (error) {
      console.log(error);
      alert('데이터를 불러오는데 실패하였습니다');
    }
  };

  this.element = $input;
  this.searchOn = func => {
    $input.addEventListener('keyup', onLoadData(func));
  }
  this.searchOff = func => {
    $input.removeEventListener('keyup', onLoadData(func));
  }
};
