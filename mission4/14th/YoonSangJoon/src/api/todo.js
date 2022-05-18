import { request, requestWithoutJson, HTTP_METHOD } from '../utils/index.js';
import { BASE_URL, MY_USER_NAME, errorMessages } from '../constant/index.js';

const {
  LOAD_TODO_ERROR,
  ADD_TODO_ERROR,
  DELETE_TODO_ERROR,
  DELETE_TODO_ALL_ERROR,
  TOGGLE_COMPLETE_ERROR,
} = errorMessages;

const todoAPI = {
  async getTodoList(userName = MY_USER_NAME, delay = 1000) {
    try {
      return request(`${BASE_URL}${userName}?delay=${delay}`);
    } catch (error) {
      throw new Error(LOAD_TODO_ERROR);
    }
  },

  async addTodo(content) {
    try {
      return requestWithoutJson(
        `${BASE_URL}${MY_USER_NAME}`,
        HTTP_METHOD.POST(content)
      );
    } catch (error) {
      throw new Error(ADD_TODO_ERROR);
    }
  },

  async deleteTodo(todoId) {
    try {
      return requestWithoutJson(
        `${BASE_URL}${MY_USER_NAME}/${todoId}`,
        HTTP_METHOD.DELETE()
      );
    } catch (error) {
      throw new Error(DELETE_TODO_ERROR);
    }
  },

  async deleteTodoAll() {
    try {
      return requestWithoutJson(
        `${BASE_URL}${MY_USER_NAME}/all`,
        HTTP_METHOD.DELETE()
      );
    } catch (error) {
      throw new Error(DELETE_TODO_ALL_ERROR);
    }
  },

  async toggleComplete(todoId) {
    try {
      return requestWithoutJson(
        `${BASE_URL}${MY_USER_NAME}/${todoId}/toggle`,
        HTTP_METHOD.PUT()
      );
    } catch (error) {
      throw new Error(TOGGLE_COMPLETE_ERROR);
    }
  },
};

export default todoAPI;
