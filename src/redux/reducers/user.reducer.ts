import { SIGNIN_SUCCESS, SIGNUP_SUCCESS, SIGNIN_FAIL, SIGNUP_FAIL, AUTH_LOADING } from '../actions/types';


interface actionI {
  type: string;
  payload: string;
  isAuthenticated: boolean;

}

interface userState {
  token: string | null,
  authLoading: boolean,
  isAuthenticated: boolean,
}

const initialState: userState = {
  isAuthenticated: false,
  token: null,
  authLoading: false,
};

const userReducer = (state = initialState, action: actionI): userState => {
  const { type, payload } = action;

  switch (type) {
    case SIGNIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        token: payload,
        isAuthenticated: true,
      };
    case AUTH_LOADING:
      return {
        ...state,
        authLoading: true,
        token: null,
        isAuthenticated: false,
      };
      case SIGNIN_FAIL:
      case SIGNUP_FAIL:
      return {
        ...state,
        authLoading: false,
        token: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}

export default userReducer;