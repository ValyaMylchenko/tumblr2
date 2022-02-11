import { Field, Form } from "react-final-form"
import s from './FindFriend.module.css';


function FriendsSearchForm(props) {
    let onSubmit = (FormData) => {
        console.log(FormData)
        props.searchUsers(FormData);
    }
    return <FormF onSubmit={onSubmit} />
}


function FormF(props) {
   return <Form 
   onSubmit={props.onSubmit} 
   render={({handleSubmit}) => (
            <form className={s.form} onSubmit={handleSubmit}>
              <div> 
                  <Field className={s.textarea} name="usersNickname" component="textarea" placeholder="Write your text" /> </div>
              <button className={s.button} type="submit">Send </button> 
            </form>
        )
    
    }
    />
    }


export default FriendsSearchForm;