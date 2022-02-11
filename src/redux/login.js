import { Login } from "../api/api";


const LOGIN_USER = 'LOGIN-USER';


let initialState = {
  email: null,
  password: null,
  rememberMe: false
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {

    case "LOGIN-USER": {
      return {
        ...state, ...action.data,
          }
    }
    default:
      return state;
  }

}


export const loginUser = (email, password, rememberMe) => (
  {
    type: LOGIN_USER, data: {email, password, rememberMe}
  })




