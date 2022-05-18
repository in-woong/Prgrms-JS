import { NOT_ARRAY_ERROR
  , NOT_FOUND_ID_ERROR
  , NOT_FOUND_CONTENT_ERROR
  , NOT_FOUND_ISCOMPLETED_ERROR
  , NOT_FOUND_USERID_ERROR } from './Error.js';

export function validateTodoList(state) {
  try {
    if(!Array.isArray(state)) throw new Error(NOT_ARRAY_ERROR);

    for(const { _id, content, isCompleted } of state) {
      if(typeof _id !== 'string') throw new Error(NOT_FOUND_ID_ERROR);
      if(typeof content !== 'string') throw new Error(NOT_FOUND_CONTENT_ERROR);
      if(typeof isCompleted !== 'boolean') throw new Error(NOT_FOUND_ISCOMPLETED_ERROR);
    }

    return state;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export function validateUsers(state) {
  try {
    if(!Array.isArray(state)) throw new Error(NOT_ARRAY_ERROR);

    for(const user of state) {
      if(typeof user !== 'string') throw new Error(NOT_FOUND_USERID_ERROR);
    }

    return state;
  } catch (error) {
    console.log(error);
    return [];
  }
}