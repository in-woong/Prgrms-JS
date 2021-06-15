export default function(){
  const $input = document.createElement('input');

  const onLoadData = func => e => {
    if(e.target.value==='')return;
    fetch(`https://jjalbot.com/api/jjals?text=${e.target.value}`)
      .then(x => x.json())
      .then(data => func(data));
  };

  this.element = $input;
  this.searchOn = func => {
    $input.addEventListener('keyup', onLoadData(func));
  }
  this.searchOff = func => {
    $input.removeEventListener('keyup', onLoadData(func));
  }
};
