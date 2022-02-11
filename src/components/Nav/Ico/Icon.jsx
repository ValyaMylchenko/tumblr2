import React from 'react';
import s from './Icon.module.css';
import {NavLink} from 'react-router-dom';

function Icon() {
  return (
    
            
          <div className={s.right}>
          <NavLink to="/news"><img src='https://64.media.tumblr.com/a4dbd9eccb9dcc3d5890464e13d5d2d2/729f4cc33dbf58de-2f/s640x960/41e4dafb35371ad5a88d3c06004c26c885e0310b.png' className={s.icon}/></NavLink>
            <NavLink to="/dialogs"><img src='https://64.media.tumblr.com/4bef6d76c3a225e5c740aa9b9a7e4d53/729f4cc33dbf58de-ee/s500x750/6d3120928dc72aef17c4eea39ff7f95043d78a9d.png' className={s.icon}/></NavLink>
            <NavLink to="#"><img src='https://64.media.tumblr.com/158277fd2775ca1f764a2b35699e4d78/729f4cc33dbf58de-33/s1280x1920/9c5ada565e8023ee3e1d7fad51adef9cd2c55ade.png' className={s.icon}/></NavLink>
            <NavLink to="/friends"><img src='https://64.media.tumblr.com/66e79e099aedda3c3c4ec4e3c00f4318/729f4cc33dbf58de-24/s1280x1920/0e3a95f6608a409379d36861268610809e95a3e5.png' className={s.icon}/></NavLink>
            <NavLink to="/profile"><img src='https://64.media.tumblr.com/9651feab76608730e77707213eb7ec19/729f4cc33dbf58de-af/s540x810/a47059efd9c037aa9cc7502094b5684446e5cd3d.png' className={s.icon}/></NavLink>
          </div>
          
        
        
  );
}

export default Icon;