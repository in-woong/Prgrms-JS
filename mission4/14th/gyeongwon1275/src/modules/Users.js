export default function Users({ $container, users, defaultUser, onSelect }) {
  $container.insertAdjacentHTML(
    'beforeEnd',
    `<label for="users">사용자 선택</label>
    <select name="users" id="users">
    ${`<option value=${defaultUser} selected>${defaultUser}</option>`}
      ${users.map(user => `<option value=${user}>${user}</option>`)}
    </select>
`
  );

  document.querySelector('select').addEventListener('change', onSelect);
}
