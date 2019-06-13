class SearchModel {
  constructor() {
  }
}
class SearchController { }
class SearchResult { }
(function () {
  document.querySelector('#search-keyword').addEventListener('keyup', function (e) {
    fetch(`https://jjalbot.com/api/jjals?text=${e.target.value}`)
      .then(x => x.json())
      .then((data) => {
        console.log(JSON.stringify(data, null, 2))
        document.querySelector('#search-result').innerHTML = `${data.map((d) => `<img src="${d.imageUrl}">`).join('')}`
      })
  });
})();

class Jjal {
  constructor() {
    _id = '';           // 아이디
    tags = [];          // 태그들
    status = '';        // 승인 상태
    shortId = '';       // 쇼튼 아이디
    title = '';         // 제목
    type = '';          // imageType
    videoUrl = '';      // 비디오 url
    bucketUrl = '';     // 비디오 url의 버킷 url
    metadata = {
      originalUrl: '', // 원본 파일 url
      contentType: ''  // 원본 파일 타입
    };
    createdAt = '';     // 생성일
    updatedAt = '';     // 수정일
    __v = 0;
    imageUrl = '';      // gif
  }
}

class HttpModule {
  onRequest = async (path, init) => {
    try {
      const res = await fetch(path, init);
      if (res && res.ok) return await res.json();
      else throw new Error(res);
    } catch (err) {
      alert('네트워크 장애입니다.')
      console.log(err)
    }
  }

  parseResponse = (res) => res
}
class ApiService extends HttpModule {
  constructor() {
    super();
    this.API_JJAL_LIST = "https://jjalbot.com/api/jjals"
  }

  getJjalList = async (query) => {
    const res = await this.onRequest(`${this.API_JJAL_LIST}?text=${query}`);
    // return this.parseResponse(res);
    return res;
  }
}

console.log(new ApiService().getJjalList('피자'));