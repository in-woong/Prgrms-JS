export function validate() {
    if(!new.target) {
      throw new Error("You need new keyword")
    }
    if(!data) {
      throw new Error("Your data is wrong")
    }
    if (!data.every(todo => typeof todo.text === 'string' || typeof todo.isCompleted === 'boolean')) {
      throw new Error("Your data has wrong property")
    }
  }
