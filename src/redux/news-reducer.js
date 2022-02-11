const ADD_POST = 'ADD-POST';

let initialState = {
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
  ]
}

export const newsReducer = (state = initialState, action) => {
    switch(action.type){
      
        case "ADD-POST": {
        let newPost = {
            id: 7,
            text: action.text,
            likescount: 0
          }
          let stateCopy = {...state};
          stateCopy.posts = [...state.posts];
          stateCopy.posts.push(newPost);
          return stateCopy;
        }
        default: 
        return state;
    }
    
}

export const addPostActionCreator = (post) => ({ type: ADD_POST, text: post.post })


