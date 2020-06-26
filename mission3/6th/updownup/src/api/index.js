const fetchSearch = async (keyword) => {
  try {
      const data = await fetch(`https://jjalbot.com/api/jjals?text=${keyword}`)
      const jsonData = await data.json()
      return jsonData
  } catch (error) {
    console.log('fetch failed ', error)
  }
}

export { fetchSearch }

/**
 * try {
      const data = await fetch(`https://jjalbot.com/api/jjals?text=${keyword}`)
      const jsonData = await data.json()
      this.setState(jsonData)
      this.render()
    } catch (error) {
      console.log(error)
    }
 * 
 * 
 */