const dummyData = [
    {
        _id: "5c2258053d184c40e5be90d1",
        tags: ["제3의 매력", "피자", "먹방"],
        status: "approved",
        shortId: "XYv-lnmlJ",
        title: "제3의 매력 피자 먹방",
        type: "video/mp4",
        videoUrl:
            "https://storage.googleapis.com/jjalbot-jjals/2018/12/XYv-lnmlJ/zzal.mp4",
        bucketUrl: "2018/12/XYv-lnmlJ/zzal.mp4",
        metadata: {
            originalUrl:
                "https://2runzzal.com/media/SnJpMDdrSUwzNmJ1MlBndHFqRXVtZz09/zzal.mp4",
            contentType: "video/mp4"
        },
        createdAt: "2018-12-25T16:17:09.416Z",
        updatedAt: "2018-12-29T19:34:23.177Z",
        __v: 0,
        imageUrl:
            "https://storage.googleapis.com/jjalbot-jjals/2018/12/XYv-lnmlJ/zzal.gif"
    }
]

const searchInput = new SearchInput('#search-input');
const searchResult = new SearchResult('#search-result', dummyData);
const searchAPI = new SearchAPI();
const searchHistory = new SearchHistory('#search-history');

searchResult.render();