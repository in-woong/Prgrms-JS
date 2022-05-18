export default function ({ onDataLoad }) {
  let timer = null;
  document.querySelector('#search-keyword').addEventListener('keyup', (e) => {
    if (timer) {
      clearTimeout(timer);
    }

    const text = e.target.value;
    if (text !== '') {
      timer = setTimeout(() => {
        this.search(text, true);
      }, 500);
    } else {
      onDataLoad('', [], false);
    }
  });

  this.search = async (text, isSaveHistory) => {
    const jjals = await getJJals(text);
    onDataLoad(text, jjals, isSaveHistory);
  };
}

function getJJals(text) {
  return fetch(`https://jjalbot.com/api/jjals?text=${text}`).then((x) =>
    x.json()
  );
}
