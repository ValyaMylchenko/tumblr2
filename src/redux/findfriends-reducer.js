import { followAPI, getUsers, unfollowAPI } from "../api/api";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const ISFETCHING = 'IS_FETCHING';
const FOLLOWING_IN_PROGRESS = 'FOLLOW0ING-IN-PROGRESS';
const SEARCH_USERS = 'SEARCH-USERS';


let initialState = {
  users: [],
  pageSize: 50,
  totalCount: 33,
  currentPage: 1,
  isFetching: true,
  followingInProgress: []
}

export const findFriendsReducer = (state = initialState, action) => {
  switch (action.type) {

    case "FOLLOW": {
      return {
        ...state, users: state.users.map(u => {
          if (u.id === action.id) {
            let user = { ...u }
            user.followed = true;
            return user;
          }
          return u;
        })
      }
    }
    case "UNFOLLOW": {
      return {
        ...state, users: state.users.map(u => {
          if (u.id === action.id) {
            return { ...u, followed: false };
          }
          return u;
        })
      }
    }
    case 'SET_USERS': {

      return { ...state, users: [...action.users] }
    }
    case 'IS_FETCHING': {
      return { ...state, isFetching: action.isFetch }

    }
    case 'FOLLOW0ING-IN-PROGRESS': {
      return {
        ...state, followingInProgress:
          action.isFetching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id !== action.userId)

      }
    }
    case 'SET-CURRENT-PAGE': return { ...state, currentPage: action.number }
    case 'SET-TOTAL-COUNT': return { ...state, totalCount: action.number }
    case 'SEARCH-USERS': {
      let username = action.nickname;
      let stateCopy = [] 
      let usersArray = state.users;
      usersArray.forEach(user => {
        if (user.name == username){
          stateCopy.push(user)
        }
      });
      return stateCopy;
    }
    default:
      return state;
  }

}



export const follow = (userid) => (
  {
    type: FOLLOW, id: userid
  })
export const unfollow = (userid) => (
  {
    type: UNFOLLOW, id: userid
  })
export const setUsers = (users) => (
  {
    type: SET_USERS, users
  })
export const setCurrentPage = (number) => (
  {
    type: SET_CURRENT_PAGE, number: number
  })
export const setTotalCount = (number) => (
  {
    type: SET_TOTAL_COUNT, number: number
  })
export const setIsFenching = (bool) => (
  {
    type: ISFETCHING, isFetch: bool
  })
export const setFollowingInProgress = (isFetching, userId) => (
  {
    type: FOLLOWING_IN_PROGRESS, isFetching, userId
  })

  export const searchUsers = (data) => (
    {
      type: SEARCH_USERS, nickname: data.usersNickname
    })



export const getUsersThunkCreator = (currentPage, pageSize,) => {
  return (dispatch) => {
    dispatch(setIsFenching(true));
    getUsers(currentPage, pageSize).then(data => {
      dispatch(setIsFenching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalCount(data.totalCount));
    })
  }
}

export const followThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(setFollowingInProgress(true, userId));
    followAPI(userId).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(follow(userId))
      }
      dispatch(setFollowingInProgress(false, userId));
    })
  }
}

export const unfollowThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(setFollowingInProgress(true, userId));
    unfollowAPI(userId).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(unfollow(userId))
      }
      dispatch(setFollowingInProgress(false, userId));
    })
  }
}
