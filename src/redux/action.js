import * as types from './actionTypes'

export const addToDo = (todo) => {
  return {
    type: types.ADD_TODO,
    payload: todo,
  }
}

export const deleteToDo = (id) => {
  return {
    type : types.DELETE_TODO,
    payload: id,
  }
}

export const editToDo = (id) => {
  return {
    type: types.EDIT_TODO,
    payload: id,
  }
}

export const updateToDo = (todo) => {
  return {
    type: types.UPDATE_TODO,
    payload: todo,
  }
}