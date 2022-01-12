export default function Users(params) {
    const $target = document.createElement('div');
    params.$target.appendChild($target);
    
    const onClick = params.onClick;
    let data = params.data || [];

    $target.addEventListener('click', function (e) {
        const user = e.target.closest('li').textContent;
        onClick(user);
    });
    
    this.setState = function (nextData) {
        data = nextData;
        this.render();
    }
    
    this.render = function () {
        $target.innerHTML = `<h3>Users</h3><ul>${data.map(user => `<li>${user}</li>`).join('')}</ul>`;
    }

    this.render();
}
