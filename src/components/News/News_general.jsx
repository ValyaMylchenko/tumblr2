import React from 'react';
import s from './News.module.css';
import Suggestions from './Interesting/Suggestions';
import Radar from './Interesting/Radar';
import News from './News/News';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

function News_gen(props) {
  if (props.isAuth) {
  return (
    <div className={s.body}>
       <News state = {props.state} />
        <div className={s.second}> 
       <Suggestions />
       <Radar />
       
        </div>
      </div>
  ); } else {
    return (
      <Redirect to={'/login'} />
    )
  }
  
}
const mapStateToProps = (state) => ({
    state: state,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps)(News_gen);