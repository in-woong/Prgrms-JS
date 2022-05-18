import { myName } from '../constant/userName.js';

export async function getUsers() {
  try {
    const res = await fetch(`https://todo-api.roto.codes/users`);

    // Guard Clause
    if (!res.ok) throw new Error('Failed to fetch GET Users ');

    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getTodo(userName = myName) {
  try {
    const res = await fetch(
      `https://todo-api.roto.codes/${userName}?delay=1000`
    );

    // Guard Clause
    if (!res.ok) throw new Error('Failed to fetch GET API');

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function postTodo(content) {
  try {
    const res = await fetch(`https://todo-api.roto.codes/${myName}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content,
      }),
    });
    // Guard Clause
    if (!res.ok) throw new Error('Failed to fetch POST API');

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function deleteTodo(id) {
  try {
    const res = await fetch(`https://todo-api.roto.codes/${myName}/${id}`, {
      method: 'DELETE',
    });
    // Guard Clause
    if (!res.ok) throw new Error('Failed to fetch DELETE API');

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function deleteAllTodo(id) {
  try {
    const res = await fetch(`https://todo-api.roto.codes/${myName}/all`, {
      method: 'DELETE',
    });
    // Guard Clause
    if (!res.ok) throw new Error('Failed to fetch DELETE ALL API');

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function toggleTodo(id) {
  try {
    const res = await fetch(
      `https://todo-api.roto.codes/${myName}/${id}/toggle`,
      {
        method: 'PUT',
      }
    );
    // Guard Clause
    if (!res.ok) throw new Error('Failed to fetch PUT API');
  } catch (err) {
    console.error(err);
  }
}
