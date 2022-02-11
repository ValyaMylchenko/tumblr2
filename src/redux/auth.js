import { isLogin, Login, Logout } from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';
const ISFETCH = 'IS_FETCH';
const ERROR = 'ERROR';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false, 
  isFetching: true,
  error_message: null
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {

    case "SET-USER-DATA": {
      return {
        ...state, ...action.data,
       // isAuth: true
          }
    }
    case 'IS_FETCH': {
      return { ...state, isFetching: action.isFetch }
    }
    case 'ERROR': {
      return { ...state, error_message: action.error }
    }
    default:
      return state;
  }

}


export const authUsersData = (userId, email, login, isAuth) => (
  {
    type: SET_USER_DATA, data: {userId, email, login, isAuth}
  })
export const setIsFench = (bool) => (
  {
     type: ISFETCH, isFetch: bool
  })
export const error = (error_message) => (
  {
     type: ERROR, error: error_message
  })

  export const isLoginTC = () => {
    return (dispatch) => {
      dispatch(setIsFench(true));
      return isLogin()
      .then(response => {
          if(response.data.resultCode === 0) {
              let {id, login, email} = response.data.data;
              dispatch(authUsersData(id, email, login, true)) 
              dispatch(setIsFench(false));
          } else {
            dispatch(setIsFench(false));
          }
  } )
  }
  }

  export const loginTC = (email, password, rememberMe) => (dispatch) =>{
    return (
      Login(email, password, rememberMe)
      .then(response => {
          if(response.data.resultCode === 0) {
            dispatch(isLoginTC())
            dispatch(error(null))
            alert("ok") 
          } else {
            dispatch(error(response.data.messages))
          }})
  
        )}


export const logoutTC = () => (dispatch) =>{
    return (
      Logout()
      .then(response => {
          if(response.data.resultCode === 0) {
            dispatch(authUsersData(null, null, null, false)) 
          } else {
              alert(response.data.messages);
          }})
  
        )}
