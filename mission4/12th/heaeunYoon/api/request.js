const END_POINT = 'https://todo-api.roto.codes'

const getFetch = async ({ url }) => {
  try {
    const todos = await (await fetch(`${END_POINT}${url}`)).json()

    return todos
  } catch (e) {
    console.log(e)
    return null
  }
}

const postFetch = async ({ url, body }) => {
  try {
    const result = await (
      await fetch(`${END_POINT}${url}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
    ).json()

    return result
  } catch (e) {
    console.log(e)
    return null
  }
}

const putFetch = async ({ url }) => {
  try {
    const result = await (
      await fetch(`${END_POINT}${url}`, {
        method: 'PUT',
      })
    ).json()

    return result
  } catch (e) {
    console.log(e)
    return null
  }
}

const deleteFetch = async ({ url }) => {
  try {
    const result = await (
      await fetch(`${END_POINT}${url}`, {
        method: 'DELETE',
      })
    ).json()

    return result
  } catch (e) {
    console.log(e)
    return null
  }
}

export { getFetch, postFetch, putFetch, deleteFetch }
