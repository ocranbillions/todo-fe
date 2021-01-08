import axios from 'axios';
import { Dispatch } from "redux";

import { SIGNIN_SUCCESS, SIGNUP_SUCCESS, SIGNIN_FAIL, SIGNUP_FAIL, AUTH_LOADING } from './types';


export interface UserI {
  email: string;
  password: string;
}

export const registerUser = (user: UserI) => async (dispatch: Dispatch) => {

  try {
    dispatch({
        type: AUTH_LOADING
    })
    const headers = { headers: { 'Content-Type': 'application/json' } }
    const res = await axios.post('http://localhost:4000/auth/signup', user, headers);

    dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data.data.token
    })
  
  } catch(e) {
    dispatch({
        type: SIGNUP_FAIL
    })
  }

}; 

export const loginUser = (user: UserI) => async(dispatch: Dispatch) => {

  try {
    dispatch({
        type: AUTH_LOADING
    })
    const headers = { headers: { 'Content-Type': 'application/json' } }
    const res = await axios.post('http://localhost:4000/auth/signin', user, headers);

    dispatch({
        type: SIGNIN_SUCCESS,
        payload: res.data.data.token
    })
  
  } catch(e) {
    dispatch({
        type: SIGNIN_FAIL
    })
  }
}

export const ADD_LIST = 'ADD_LIST';
export const LOGIN_USER = 'LOGIN_USER';

export interface Task {
  name: string;
  id: string;
  completed: boolean;
}

export interface List {
  name: string;
  id: string;
  tasks: Task[];
}


// Actions
interface AddListAction {
  type: typeof ADD_LIST;
  payload: List;
} 

// Actions
interface loginUserAction {
  type: typeof LOGIN_USER;
  payload: UserI;
} 


// export type ListsAction = AddListAction | GetListsAction | GetListByIdAction | SetListIdToDeleteAction | SetListToEditAction | DeleteListAction | UpdateListAction | SetSelectedListAction | AddTaskAction | DeleteTaskAction | SetTaskToDeleteAction | UnsetTaskToDeleteAction | EditTaskAction | SetTaskToEditAction | UnsetTaskToEditAction;

export type ListsAction = AddListAction
export type loginAction = loginUserAction

// export const addList = (list: List): ListsAction => {
//   return {
//     type: ADD_LIST,
//     payload: list
//   }
// }
