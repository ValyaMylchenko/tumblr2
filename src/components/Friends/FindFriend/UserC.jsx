
import React from 'react';

import UsersFunc from './UsersFunc';
import Preloader from '../../Preloader/Preloader';

class Users extends React.Component {
    
  
  
    componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
       
    }

    onPageChanged = (el) => {
      this.props.getUsers(el, this.props.pageSize);
      
        
      }
  render () {
    
    return  <>
    {this.props.isFetching ? <Preloader /> : null}
    <UsersFunc totalCount={this.props.totalCount} 
    pageSize={this.props.pageSize} 
    state={this.props.state} 
    currentPage={this.props.currentPage}
    onPageChanged={this.onPageChanged}
    unfollow={this.props.unfollow}
    follow={this.props.follow}
    text={this.props.text}
    setFollowingInProgress={this.props.setFollowingInProgress}
    isFollowingProgress={this.props.isFollowingProgress}
    following = {this.props.following}
    unfollowing = {this.props.unfollowing}
    searchUser={this.props.searchUsers}/> 
    </>
    
  }
}

export default Users;