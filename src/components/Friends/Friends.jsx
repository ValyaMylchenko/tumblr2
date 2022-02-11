
import s from './Friends.module.css';
import React from 'react';
import Friend from './listItem/Friend';
import { NavLink } from 'react-router-dom';

function Friends(props) {

   let friendsElements = props.state.getState().friendsPage.map( friend => <Friend name={friend.name} id={friend.id} />)

  return (
    <div className={s.allPage}>
    <div className={s.bg}>
      <div>
        {friendsElements}
      </div>
    </div>
        <NavLink className={s.link} to="/findfriends">Find users</NavLink>
    </div>
  );
}

export default Friends;