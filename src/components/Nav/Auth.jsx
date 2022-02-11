import React from 'react'
import Nav from './Nav';
import { isLoginTC, logoutTC } from '../../redux/auth';
import { connect } from 'react-redux'




//let ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(<Profile />) 

class NavContainer extends React.Component {

    render() {
        return <Nav {...this.props}/>
}
   
}

// let mapStateToProps  = (state) => ({
//     profile: state.profilePage.profile
// } )

//let ProfileWithRouter = withRouter(ProfileContainer) 

//export default NavContainer;

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login

} )

export default connect(mapStateToProps, {isLoginTC, logoutTC})(NavContainer) 
