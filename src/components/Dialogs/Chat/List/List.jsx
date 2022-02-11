import React from 'react';
import s from './List.module.css';
import {NavLink} from 'react-router-dom';



const ListItem = (props) => {
  return (
    <div>
    <NavLink to={"/dialogs/" + props.id} className={s.link} activeClassName={s.active}><span className={s.span}>{props.name}</span></NavLink>
  </div>
  )
}
function List() {
  let dialogsData = [
    {name: 'Andrew', id: 1},
    {name: 'Hichigo', id: 2},
    {name: 'Kukwe', id: 3},
  ]
  return (
    <div>
        <h2 className={s.title}>Conversations</h2>
      
        <ListItem id={dialogsData[0].id} name={dialogsData[0].name} />
        <ListItem id={dialogsData[1].id} name={dialogsData[1].name} />
        <ListItem id={dialogsData[2].id} name={dialogsData[2].name} />
    </div>
  );
}

export default List;