import React from 'react';
import s from './Post.module.css';


function Post(props) {
  return (
    <div className={s.new}>
      <img src='https://i.pinimg.com/564x/27/1e/92/271e928230d89fccf6b8cadc4e3cfff0.jpg' className={s.img} />
      <div className={s.post}>
        <div className={s.upper}>
          <span className={s.nickname}>hichking</span>
          <a className={s.extra} href="#">***</a>
        </div>
        <div className={s.main_part}>
          {props.text}
        </div>
        <div className={`${s.main_part} ${s.tags}`}>
        <a href="#" className={`${s.tag} ${s.extra}`}>#Hichigo</a>
        <a href="#" className={`${s.tag} ${s.extra}`}>#Ichigo</a>
        </div>
        <div className={`${s.foot} ${s.main_part}`}>
          <div>{props.count} likes</div>
          <div>
            <a href="#" className={`${s.tag} ${s.extra}`}>Share</a>
            <a href="#" className={`${s.tag} ${s.extra}`}>Like</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;