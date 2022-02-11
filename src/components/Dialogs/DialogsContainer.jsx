
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuth from '../../hoc/AuthRedirect';
import { addMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';



let mapStateToProps = (state) => {

  return {
    state: state.messagesPage,
    }
}

let mapDispatchToProps = (dispatch) => {

  return {
    addMessage: (text) => {
      dispatch(addMessageActionCreator(text));
    }
  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuth
)(
  Dialogs
);;