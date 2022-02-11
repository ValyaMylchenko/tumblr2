import React from 'react';
import s from './Radar.module.css';


function Radar() {
  return (
    <div className={s.radar}>
      <h1 className={s.h}>Radar</h1>
      
      <div className={s.post}>
        <div className={s.upper}>
          <div className={s.imgnick}>
        <img src='https://i.pinimg.com/564x/27/1e/92/271e928230d89fccf6b8cadc4e3cfff0.jpg' className={s.img} />
          <span className={s.nickname}>hichking</span></div>
          <a className={s.extra} href="#">***</a>
        </div>
        <div className={s.main_part}>
          Hello, people
          I hate and respect Ichi )))))
        </div>
        <div className={`${s.main_part} ${s.tags}`}>
        <a href="#" className={`${s.tag} ${s.extra}`}>#Hichigo</a>
        <a href="#" className={`${s.tag} ${s.extra}`}>#Ichigo</a>
        </div>
        <div className={`${s.foot} ${s.main_part}`}>
          <div>40 likes</div>
          <div>
            <a href="#" className={`${s.tag} ${s.extra}`}>Share</a>
            <a href="#" className={`${s.tag} ${s.extra}`}>Like</a>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Radar;