
import React from 'react';
import { withRouter } from 'react-router';
import { Route } from "react-router-dom";
import { compose } from 'redux';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import FindFriendContainer from './components/Friends/FindFriend/FindFriendContainer';
import Friends from './components/Friends/Friends';
import Login from './components/Login/Login';
import NavContainer from './components/Nav/Auth';
import News_gen from './components/News/News_general';
import ProfileContainer from './components/Profile/ProfileContainer';
import {initTC} from './redux/app-global-reducer'
import { connect } from 'react-redux';
import Preloader from './components/Preloader/Preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.initTC();
}

  render () {
    if (!this.props.initial) {
      return <Preloader />
    }

    return (
      <div className="app">
        <NavContainer />
        <Route render={() => <DialogsContainer/>}  path="/dialogs" />
        <Route render={() => <News_gen state={this.props.state} /> } path="/news"/>
        <Route render={() => <Friends state={this.props.state} />} path="/friends" />
        <Route render={() => <FindFriendContainer />} path="/findfriends" />
        <Route render={() => <ProfileContainer />} path="/profile/:userId?" />
        <Route render={() => <Login />} path="/login" />
  
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initial: state.app.init
})

export default compose(withRouter,
  connect(mapStateToProps, {initTC}))(App)


