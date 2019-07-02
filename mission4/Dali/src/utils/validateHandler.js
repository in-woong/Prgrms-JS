const validateHandler = (handler) => {
  return handler && typeof handler === "function"
};

export default validateHandler;
