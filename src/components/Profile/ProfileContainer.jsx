import React from 'react'
import { connect } from 'react-redux'
import { profileTC, getUserStatus, updateUserStatus } from '../../redux/profile-reducer'
import Profile from './Profile'
import { withRouter } from 'react-router';

import withAuth from '../../hoc/AuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
        }
        this.props.profileTC(userId)
        this.props.getUserStatus(userId)
        
}

    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus = {this.props.updateUserStatus}/>
}
   
}

let mapStateToProps  = (state) => ({
    profile: state.profilePage.profile,
    userId: state.auth.userId,
    status: state.profilePage.status
} )



export default compose(
    connect(mapStateToProps, {profileTC, getUserStatus, updateUserStatus}),
    withRouter,
    withAuth
)(ProfileContainer)
