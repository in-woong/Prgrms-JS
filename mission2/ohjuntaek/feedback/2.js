// 피드백 1. IIFE 사용 예제

var rotoSDK = window.rotoSDK || {}
rotoSDK.api = (function () {
    function fetchData() {
        console.log("12");
    }

    return {
        fetchData
    }
})();
// 이러면 rotoSDK.api.fetchData 가 되서 전역오염 안한다

// 바꾸기 - 못하겟네
var rotoSDK = window.rotoSDK || {
    api: function () {
        let fetchData = function () {
            console.log("fetchData print")
        };
        return {
            fetchData
        }
    }
};
// 아니 다 함수 표현식으로 바꿔볼려니깐 안되네... fetchData가 계속 undefined
// 일단 함수에 대해서 좀 배워야지 
// 함수안에 함수 속성? 아직 모르곘다

// -------------------------
// 피드백 2. 콜백 헬
// 받은 코드
const fetchWithCallback(url, callback) {
    ajax.get(url, function (res) {
        callback(res)
    })
}

const responseToJson(res, callback) {
    res.getBody(function (responseBody) {
        callback(JSON.parse(responseBody))
    })
}

const fetchCallbackHell = function (text, callback) {
    fetchWithCallback(`https://jjalbot.com/api/jjals?text=${e.target.value}`, function (res) {
        responseToJson(res, function (data) {
            searchResult.setState(data)
        })
    })
}

// 바꾸기
ajax.get(url, function (res) {
    res.getBody(function (responseBody) {
        data = JSON.parse(responseBody);
        searchResult.setState(data);
    })
})
// 이거랑 똑같은거 아닌가?

