import SearchInput from "./components/SearchInput.js";
import SearchResult from "./components/SearchResult.js";
import SearchHistory from "./components/SearchHistory.js";
import getData from "./api/index.js";
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
  },
  {
    _id: "5c2257c33d184c40e5be907f",
    tags: ["매운녀", "매워", "세상에이런일이", "피자", "핫소스"],
    status: "approved",
    shortId: "VAXe_cxo3",
    title: "매운녀 매워 세상에이런일이 피자 핫소스",
    type: "video/mp4",
    videoUrl:
      "https://storage.googleapis.com/jjalbot-jjals/2018/12/VAXe_cxo3/zzal.mp4",
    bucketUrl: "2018/12/VAXe_cxo3/zzal.mp4",
    metadata: {
      originalUrl:
        "https://2runzzal.com/media/VVhjOEVxamFDUjRkckdtVmdQZkNPZz09/zzal.mp4",
      contentType: "video/mp4"
    },
    createdAt: "2018-12-25T16:16:03.314Z",
    updatedAt: "2018-12-29T19:31:30.827Z",
    __v: 0,
    imageUrl:
      "https://storage.googleapis.com/jjalbot-jjals/2018/12/VAXe_cxo3/zzal.gif"
  },
  {
    _id: "5c2251f53d184c40e5be8953",
    tags: ["한입만", "여친", "일타쌍피", "피자 한입만"],
    status: "approved",
    shortId: "DVNQE3d-g",
    title: "한입만 여친 일타쌍피 피자 한입만",
    type: "video/mp4",
    videoUrl:
      "https://storage.googleapis.com/jjalbot-jjals/2018/12/DVNQE3d-g/zzal.mp4",
    bucketUrl: "2018/12/DVNQE3d-g/zzal.mp4",
    metadata: {
      originalUrl:
        "https://2runzzal.com/media/ZXR0OE1IT2hvY1RKQm52b2gwSWJsZz09/zzal.mp4",
      contentType: "video/mp4"
    },
    createdAt: "2018-12-25T15:51:17.707Z",
    updatedAt: "2018-12-29T18:20:12.149Z",
    __v: 0,
    imageUrl:
      "https://storage.googleapis.com/jjalbot-jjals/2018/12/DVNQE3d-g/zzal.gif"
  },
  {
    _id: "5c2251ba3d184c40e5be8909",
    tags: ["피자", "자르기", "음식"],
    status: "approved",
    shortId: "_I2hnE8FGS",
    title: "피자 자르기 음식",
    type: "video/mp4",
    videoUrl:
      "https://storage.googleapis.com/jjalbot-jjals/2018/12/_I2hnE8FGS/zzal.mp4",
    bucketUrl: "2018/12/_I2hnE8FGS/zzal.mp4",
    metadata: {
      originalUrl:
        "https://2runzzal.com/media/Z0VzeVNCaGFuTmpQL3BNYit5RnljZz09/zzal.mp4",
      contentType: "video/mp4"
    },
    createdAt: "2018-12-25T15:50:18.312Z",
    updatedAt: "2018-12-29T18:17:14.982Z",
    __v: 0,
    imageUrl:
      "https://storage.googleapis.com/jjalbot-jjals/2018/12/_I2hnE8FGS/zzal.gif"
  }
]



function App($target) {


  this.$target = $target;
  this.state = [];
  this.tags = ['피자'];
  this.getData = getData('피자')
  .then((response)=>{
    this.setState(response);
  })
  .catch(error => { throw new Error("데이터 로드 실패");});
  const searchHistory = new SearchHistory({
    $app:this.$target,
    initialState:this.tags,
    onClick: (text)=>{
      getData(text).then((response)=>{
        this.setState(response);
      }).catch(error => {
        console.log(error);
      })
    }
  })
  const searchInput = new SearchInput({
    $app:this.$target,
    addOnType: (text,$target)=>{
      getData(text)
      .then((response)=>{
        if(!this.tags.includes(text)){
          this.tags = [...this.tags,text];
        };
        $target.value = '';
        $target.focus();
        this.setState(response);
      }).catch(error => {
        console.log(error);
      })
    }
  });

  const searchResult = new SearchResult({
    $app:this.$target,
    initialState:this.state});


  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  }

  this.render = () =>{
    searchResult.setState(this.state);
    searchHistory.setState(this.tags);
  }
};

export default App;
