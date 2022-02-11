import { dialogsReducer } from "../dialogs-reducer";
import { friendsReducer } from "../friends-reducer";
import { newsReducer } from "../news-reducer";

let store = {
  _state: {
    newsPage: {
        posts: [
            {
                id: 1,
                text: "Hello",
                likescount: 0
              },
              {
                id: 2,
                text: "How r u?",
                likescount: -1
              },
              {
                id: 3,
                text: "ніregerg",
                likescount: 7
              },
              {
                id: 4,
                text: "Да",
                likescount: 6
              },
              {
                id: 5,
                text: "News",
                likescount: 2068465
              }, 
              {
                id: 6,
                text: "Да",
                likescount: 56
              }
        ],
        newPostText: ''
    },
    messagesPage: {
        messages: [
            { id: 1,
                message: "Hello! How are you&"
              },
              { id: 2,
                message: "ruolm;k&"
              },
              { id: 3,
                message: "kukwe"
              },
              { id: 4,
                message: "hohoh"
              }
        ],
        mymessages: [
            { id: 1,
                message: "Fine/"
            },
            { id: 2,
                message: "Fidfgsgne/"
            }
        ], 
        newMessageText: ''
    },
    friendsPage: [
     
        {   id: 1,
            name: "lol"},
        {   id: 2,
            name: "hich"},
        {   id: 3,
            name: "giorno"}
    ]
  },
  _callSubscriber () {

  },
  getState () {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  _addPost () {
    let newPost = {
      id: 5,
      text: this._state.newsPage.newPostText,
      likescount: 0
    }
    this._state.newsPage.posts.push(newPost);
    this._callSubscriber(this._state);
    this._state.newsPage.newPostText = '';
  }, 
  dispatch(action) { // {type: 'ADD-POST'}

    this._state.newsPage = newsReducer (this._state.newsPage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._state.friendsPage = friendsReducer(this._state.friendsPage, action);
    this._callSubscriber(this._state);
    }
  }







export default store;