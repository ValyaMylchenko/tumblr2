import {applyMiddleware, combineReducers, createStore} from "redux";
import { authReducer } from "./auth";
import { dialogsReducer } from "./dialogs-reducer";
import { findFriendsReducer } from "./findfriends-reducer";
import { friendsReducer } from "./friends-reducer";
import { newsReducer } from "./news-reducer";
import { profileReducer } from "./profile-reducer";
import thunkMiddleware from "redux-thunk" 
import { loginReducer } from "./login";
import finalFormReducer from "./reduxFinalForm"
import { appReducer } from "./app-global-reducer";




let reducers = combineReducers({
    newsPage: newsReducer,
    messagesPage: dialogsReducer,
    friendsPage: friendsReducer,
    findfriends: findFriendsReducer,
    profilePage: profileReducer,
    auth: authReducer,
    login: loginReducer,
    finalForm: finalFormReducer, 
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

