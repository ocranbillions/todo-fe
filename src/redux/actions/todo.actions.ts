import axios from 'axios';
import { Dispatch } from "redux";

import { FETCHING_TODOS, TODOS_SUCCESS, TODOS_FAIL } from './types';

export const fetchTodos = () => async (dispatch: Dispatch) => {
  try {
    dispatch({
        type: FETCHING_TODOS
    })
    
    const res = await axios.post(`https://pokeapi.co/api/v2/pokemon/`);
    
    dispatch({
        type: TODOS_SUCCESS,
        payload: res.data
    })
  
  } catch(e) {
    dispatch({
        type: TODOS_FAIL
    })
  }

}; 