class HttpModule {
  onRequest = async (path, init) => {
    try {
      const res = await fetch(path, init);
      if (res && res.ok) return await res.json();
      else throw new Error(res);
    } catch (err) {
      alert('네트워크 오류입니다.')
      console.log(res)
    }
  }

  parseResponse = (res) => res
}