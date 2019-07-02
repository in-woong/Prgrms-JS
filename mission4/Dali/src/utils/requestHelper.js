import validateHandler from "./validateHandler";

const handleRequest = async ({beforeRequest, finishRequest, request})=>{
  if(validateHandler(beforeRequest)){
    await beforeRequest();
  }
  await request();
  if(validateHandler(finishRequest)){
    await finishRequest();
  }
};

export {
  handleRequest
}
