import s from './Friend.module.css';
import React from 'react';

function Friend(props) {
  return (
    <div className={s.item}>
      <div className={s.imgname}>
          <div className={s.img}>img</div>
          <div>
          <div className={s.name}>{props.name}</div>
          <div>Updating</div>
          </div>
      </div>
      <div><button>Send a message</button> </div>
    </div>
  );
}

export default Friend;