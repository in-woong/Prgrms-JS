const HttpErrorHandler = ({ message, statusCode }) => {
  alert('에러가 났습니다', message);
  console.log('message', message);
  console.log('satusCode', statusCode);
  // doSomething
};

export default HttpErrorHandler;

//
