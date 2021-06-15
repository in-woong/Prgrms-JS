import { debounce } from './utils.js';
export default function(){
  const $input = document.createElement('input');

  const onLoadData = ([updateResult, updateHistory]) => debounce(async (e) => {
    if(e.target.value.trim()==='') return;
    try {
      const response = await fetch(`https://jjalbot.com/api/jjals?text=${e.target.value}`)
      const data = await response.json();
      updateResult(data);
      updateHistory(e.target.value);
    } catch (error) {
      console.log(error);
      alert('데이터를 불러오는데 실패하였습니다');
    }
  }, 300);

  this.element = $input;
  this.searchOn = (...funcs) => {
    $input.addEventListener('keyup', onLoadData(funcs));
  }
  this.searchOff = (...funcs) => {
    $input.removeEventListener('keyup', onLoadData(funcs));
  }
};
