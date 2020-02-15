function spinner() {
    const el = document.createElement('div');
    const spinEl = document.createElement('div');
    el.classList.add('spinner-container');
    spinEl.classList.add('spinner');
    el.appendChild(spinEl);

    return el;
}

export default spinner;
