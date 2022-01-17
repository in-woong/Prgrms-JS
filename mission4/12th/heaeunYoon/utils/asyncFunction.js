export default async function Function({ setLoading, actionItem }) {
  try {
    setLoading(true)

    await actionItem()
  } catch (e) {
    console.log(e)
  } finally {
    setLoading(false)
  }
}
