const HTTP_METHOD = {
  POST(content) {
    return {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    };
  },

  DELETE() {
    return { method: 'DELETE' };
  },

  PUT() {
    return { method: 'PUT' };
  },
};

export default HTTP_METHOD;
