function Api(baseURL, userId) {
  this.baseURL = baseURL
  this.userId = userId

  this.fetchData = async function() {
    const res = await fetch(`http://todo-api.roto.codes/${this.userId}`)
    console.log(res)

    return await res.json()
  }
}
