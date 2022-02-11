import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from './Ico/Icon';
import s from './Nav.module.css';
import Search from './Search/Search';

function Nav(props) {
  return (
    <nav className={s.nav}>
      <header className={s.nav_left}>
        <img src='https://64.media.tumblr.com/4214c4f3eaff9f4ac95aacc53bb3e844/729f4cc33dbf58de-61/s540x810/1c048dc0eade154e6f6f9e00c342d036110da7a4.png' className={s.logo} />
        <Search />
      
      </header>
      
      <div className={s.nav_right}><div className = {s.login}>
      {props.isAuth ? <div>{props.login }
        <button onClick={props.logoutTC}>LogOut</button> 
        </div> :
      <NavLink to="/login">Login</NavLink> }  </div> 
      <Icon /></div>
    </nav>
  );
}


export default Nav;