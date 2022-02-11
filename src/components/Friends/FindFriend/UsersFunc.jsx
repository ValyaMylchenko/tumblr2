import s from './FindFriend.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { followAPI, unfollowAPI } from '../../../api/api.js';
import FriendsSearchForm from './FormF';


function UsersFunc(props) {

  let searchUsers = (username) => {
    props.searchUser(username);

  }

  let pagesCount = Math.ceil(props.totalCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return <div className={s.bg}>
    <h1 className={s.h1}>Find Friends</h1>

  <FriendsSearchForm searchUsers={searchUsers}/>
    {/* <div className={s.form}>
      <textarea className={s.textarea} value={props.text} onChange={onTextUpdate} />

      <button className={s.button} > Get users </button></div> */}

    {props.state.map(username =>
      <div className={s.useritem}>
        <NavLink to={'/profile/' + username.id}> <div>{username.name}</div> </NavLink>
        {username.followed ? <button disabled={props.isFollowingProgress.some(id => id === username.id)} onClick={() => {
          props.unfollowing(username.id);
          

        }}>Unfollow</button> : <button disabled={props.isFollowingProgress.some(id => id === username.id)} onClick={() => {
            props.following(username.id);
          


        }}>Follow</button>}
      </div>
    )}
    {pages.map(el => <span className={props.currentPage === el && s.el} onClick={(e) => { props.onPageChanged(el) }}>{el}</span>)}
  </div>
}


export default UsersFunc;