async function fetchJjal(text) {
  try {
    const res = await fetch(`https://jjalbot.com/api/jjals?text=${text}`)
    return await res.json()
  } catch(e) {
    throw e
  }
}