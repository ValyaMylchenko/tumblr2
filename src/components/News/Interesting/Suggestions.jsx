import React from 'react';
import s from './Suggestions.module.css';


function Suggestions() {
  return (
    <div className={s.suggest}>
      <div>
      <p className={s.username}>hichking</p>
      <p className={s.description}>none</p>
      <ul className={s.ul}>
        <li className={s.list}><a href="#" className={s.link}><span className={s.span}>Posts</span></a></li>
        <li className={s.list}><a href="#" className={s.link}><span className={s.span}>Followers</span></a></li>
        <li className={s.list}><a href="#" className={s.link}><span className={s.span}>Activity</span></a></li>
        <li className={s.list}><a href="#" className={s.link}><span className={s.span}>Drafts</span></a></li>
        <li className={s.list}><a href="#" className={s.link}><span className={s.span}>Queue</span></a></li>
        <li className={s.list}><a href="#" className={s.link}><span className={s.span}>Edit Appearance</span></a></li>
        <li className={s.list}><a href="#" className={s.link}><span className={s.span}>Mass Post Editor</span></a></li>
      </ul>
    </div>
    </div>
  );
}

export default Suggestions;