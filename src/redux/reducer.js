import * as types from './actionTypes'

const initialState = {
  todos: [],
  todos2: [],
}
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }
    case types.DELETE_TODO:
      const deletetodo = state.todos.filter(
        (todo) => todo.id !== action.payload
      )
      return {
        ...state,
        todos: deletetodo,
      }
    case types.EDIT_TODO:
      const editform = state.todos.filter((todo) => todo.id === action.payload)
      return {
        ...state,
        todos2: [...editform],
      }
    case types.UPDATE_TODO:
      let data = [...state.todos]
      let index = data.findIndex((todo) => todo.id === action.payload.id)
      data[index] = action.payload
      return {
        ...state,
        todos: [...data],
      }
    default:
      return state
  }
}

export default todosReducer
