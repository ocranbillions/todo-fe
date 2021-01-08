import { FETCHING_TODOS, TODOS_SUCCESS, TODOS_FAIL } from '../actions/types';

const initialState = {
  todos: null,
  fetchingTodos: false,
};

const todoReducer = (state = initialState, action: {type: string, payload: object}) => {
  const { type, payload } = action;

  switch (type) {
    case FETCHING_TODOS:
      return {
        ...state,
        fetchingTodos: true,
      };
    case TODOS_SUCCESS:
      return {
        ...state,
        todos: payload,
        fetchingTodos: false,
      };
    case TODOS_FAIL:
      return {
        todos: null,
        fetchingTodos: false,
      };
    default:
      return state;
  }
}

export default todoReducer;