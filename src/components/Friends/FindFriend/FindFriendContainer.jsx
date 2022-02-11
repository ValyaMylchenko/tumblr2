import { connect } from 'react-redux';
import { follow, 
  setCurrentPage, 
  setIsFenching, 
  setTotalCount, 
  searchUsers, 
  unfollow, 
  updateText,
  setFollowingInProgress,
  getUsersThunkCreator, 
  followThunkCreator,
  unfollowThunkCreator} from '../../../redux/findfriends-reducer';
import Users from './UserC';


let mapStateToProps = (state) => {
  return {
    state: state.findfriends.users,
    totalCount: state.findfriends.totalCount,
    pageSize: state.findfriends.pageSize,
    currentPage: state.findfriends.currentPage,
    isFetching: state.findfriends.isFetching,
    isFollowingProgress: state.findfriends.followingInProgress
  }
}


const FindFriendContainer = connect(mapStateToProps, { 
  follow, 
  unfollow,
  setTotalCount,
  setIsFenching,
  setFollowingInProgress,
  getUsers: getUsersThunkCreator,
  following: followThunkCreator,
  unfollowing: unfollowThunkCreator, 
  searchUsers
})(Users);

export default FindFriendContainer;