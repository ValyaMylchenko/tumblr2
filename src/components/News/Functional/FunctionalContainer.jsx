import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/news-reducer';

 import Functional from './Functional';


let mapStateToProps = (state) => {

  return {
    t: state.newsPage.newPostText,
  }
}

let mapDispatchToProps = (dispatch) => {

  return {
    addNews: (post) => {
      dispatch(addPostActionCreator(post));
    }
  }
}

const FunctionalContainer = connect(mapStateToProps, mapDispatchToProps)(Functional);


export default FunctionalContainer;