import { Field, Form } from "react-final-form"
import s from './Dialogs.module.css';
import FormStateToRedux from "../../redux/reduxFinalForm/FormStateToRedux";


function DialogForm(props) {
    let onSubmit = (FormData) => {
        console.log(FormData)
        props.addMessage(FormData);
    }

    let validate = (e) => {
        console.log(e);
    }

    return <FormD onSubmit={onSubmit} validate={validate}/>
}


function FormD(props) {
   return <Form 
   onSubmit={props.onSubmit} 
   validate={props.validate}
   render={({handleSubmit}) => (
            <form onSubmit={handleSubmit} className={s.ent_mes}>
              <FormStateToRedux form="messages" />
              <div> 
                  <Field className={s.textarea} name="message" component="textarea" placeholder="Write your message" /> </div>
              <button type="submit">Send message</button> 
            </form>
        )
    
    }
    />
    }

// <div className={s.ent_mes}>
//           <textarea value={props.newMessageText} className={s.textarea} onChange={ onupdateTextDialogs }></textarea>
//           <button type="submit" onClick={addMessage}>Sent!</button>
//         </div>
export default DialogForm;