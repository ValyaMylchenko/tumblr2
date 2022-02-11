import {isLoginTC} from './auth'
const INITIALIZATION = 'INITIALIZATION';

let initialState = {
    init: false
    }



export const appReducer = (state = initialState, action) => {
    switch (action.type) {

        case INITIALIZATION: {
            return {
                ...state,
                init: true
            }
        }
        default:
            return state;
    }

}


export const initializationUser = () => (
    {
        type: INITIALIZATION
    })


export const initTC = () => {
    return (dispatch) => {
        let promice = dispatch(isLoginTC())
        promice.then(() =>
        dispatch(initializationUser())
        )  
    }
}

