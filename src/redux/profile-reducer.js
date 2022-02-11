import { getStatus, updateStatus, userData } from "../api/api";
const USER_STATUS = 'USER-STATUS';

const SET_USER_PROFILE = 'SET-USER-PROFILE'

let initialState = {
  profile: null,
  status: ""
}


export const profileReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'SET-USER-PROFILE': {
      return { ...state, profile: action.profile }
    }
    case 'USER-STATUS': {
      return { ...state, status: action.status }
    }
    default:
      return state;
  }

}


export const setUserProfile = (profile) => (
  {
    type: SET_USER_PROFILE, profile
  })
export const setStatus = (status) => (
  {
    type: USER_STATUS, status
  })

export const profileTC = (userId) => {
  return (dispatch) => {
    userData(userId)
    .then(response => {
      dispatch(setUserProfile(response.data));
} )
  }
}

export const getUserStatus = (userId) => {
  return (dispatch) => {
    getStatus(userId)
    .then(response => {
      dispatch(setStatus(response.data));
} )
  }
}

export const updateUserStatus = (status) => {
  return (dispatch) => {
    updateStatus(status)
    .then(response => {
      if(response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
      
} )
  }
}


