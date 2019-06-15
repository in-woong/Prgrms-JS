class Jjal {
  constructor(_) {
    this._id = _._id || '';               // 아이디
    this.tags = type.toValidArray(_tags); // -태그들
    this.status = _.status || '';         // 승인 상태
    this.shortId = _.shortId || '';       // -쇼튼 아이디
    this.title = _.title || '';           // -제목
    this.type = _.type || '';             // imageType
    this.videoUrl = _.videoUrl || '';     // 비디오 url
    this.bucketUrl = _.bucketUrl || '';   // 비디오 url의 버킷 url
    this.metadata = {
      originalUrl: _.originalUrl || '',   // 원본 파일 url
      contentType: _.contentType || ''    // 원본 파일 타입
    };
    this.createdAt = _.createdAt || '';   // 생성일
    this.updatedAt = _.updatedAt || '';   // 수정일
    this.__v = _.__v || 0;
    this.imageUrl = _.imageUrl || '';     // -gif
  }
}

Jjal.instances = new Map();
