const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
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

}


export const dialogsReducer = (state = initialState, action) => {
  switch(action.type) {
        case "ADD-MESSAGE": {
            let stateCopy = {...state};
            stateCopy.mymessages = [...state.mymessages]
            let newMessage = {
                id: 3,
                message: action.text.message
              }
             stateCopy.mymessages.push(newMessage);
             return stateCopy;
            }
        default: 
        return state;
      }
    
}

export const addMessageActionCreator = (text) => (
  { type: ADD_MESSAGE, text})
