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
      
     
        default: 
        return state;
    }
    
}




