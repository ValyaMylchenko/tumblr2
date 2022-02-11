import React from 'react'
import { Redirect } from 'react-router';
import { connect } from 'react-redux'
import Preloader from '../components/Preloader/Preloader';

let mapStateToPropsRedirect  = (state) => ({
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching,


} )

function withAuth(Component) {
    let ContainerComponent = (props) => {
        if (props.isFetching) {
            return <Preloader />
        } else {
            if (!props.isAuth) {
                return <Redirect to={'/login'} />
              } 
            return <Component {...props} />    
        }
    }
    let connectRedirect = connect(mapStateToPropsRedirect)(ContainerComponent)
    
    return connectRedirect;
}



export default withAuth;