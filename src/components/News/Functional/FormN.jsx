import { Field, Form } from "react-final-form"
import s from './Functional.module.css';
//import FormStateToRedux from "../../redux/reduxFinalForm/FormStateToRedux";
import FormStateToRedux from "../../../redux/reduxFinalForm/FormStateToRedux";
import { maxLenghtCreator, required } from "../../../validators/validation";


function NewsForm(props) {
    let onSubmit = FormData => {
        console.log(FormData)
        props.addNews(FormData);
    }
    return <FormN onSubmit={onSubmit} />
}

const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)


const maxLenght10 = maxLenghtCreator(10)
function FormN(props) {
   return <Form 
   onSubmit={props.onSubmit} 
   render={({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
            <FormStateToRedux form="posts" />
              <div> 
                  <Field name="post" validate={composeValidators(required, maxLenghtCreator(10))}> 
                  {({ input, meta }) => (
              <div>
                  {maxLenght10}
                <input {...input} placeholder="Write your text" />
                {meta.error && meta.touched && <span className={s.error}>{meta.error}</span>}
              </div>
            )}
                  </Field> </div>
              <button type="submit">Send </button> 
            </form>
        )
    
    }
    />
    }

// <div className={s.ent_mes}>
//           <textarea value={props.newMessageText} className={s.textarea} onChange={ onupdateTextDialogs }></textarea>
//           <button type="submit" onClick={addMessage}>Sent!</button>
//         </div>
export default NewsForm;