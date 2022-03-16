const SearchInput = async function (value) {
  const fetchedData = await fetch(`https://jjalbot.com/api/jjals?text=${value}`)
  const fetchedDataConvertToJSON = await fetchedData.json()
  const stringifyJSON = JSON.stringify(fetchedDataConvertToJSON, null, 2)

  return stringifyJSON
}

export default SearchInput
