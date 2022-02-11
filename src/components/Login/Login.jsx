import React from 'react'
import { Form, Field } from 'react-final-form'
import { connect } from 'react-redux'
import { loginTC } from '../../redux/auth'
import FormStateToRedux from '../../redux/reduxFinalForm/FormStateToRedux'
import { checkSymbol, minLenghtCreator, requiredSymbol } from '../../validators/validation'
import s from './Login.module.css'
import { Redirect } from 'react-router';
import Preloader from '../Preloader/Preloader'


function LoginForm(props) {
    const onSubmit = (FormData) => {
        console.log(FormData)
        props.loginTC(FormData.email, FormData.password);
    }
    if (props.isFetch){
      return <Preloader />
    }
    if (props.isAuth) {
      return <Redirect to ={'/news'} /> 
    } else { 
      return <div>
        <h1>LOGIN</h1>
        <Log onSubmit={onSubmit} />
        {(props.error ? <div className={s.error_global}>{props.error}</div> : null)}
         </div>
    }
    
}

// let LoginReduxForm = reduxForm ({
//     form: 'login'
// })(LoginForm)

// function LoginForm(props) {
//     return <form onSubmit={props.handleSubmit}>
//         <div>
//             <Field placeholder={"Login"} name={"login"} component={"input"}/>
//         </div>
//         <div><Field placeholder={"Password"} name={"password"} component={"input"}/></div>
//         <div>
//             <Field type="checkbox" name={"rememberMe"} component={"input"}/> remember me
//         </div>
//         <div><button>Login</button></div>
//          </form>
// }
let check = checkSymbol("@")
let minLength = minLenghtCreator(5);
function Log(props) {

    return <Form
    onSubmit={props.onSubmit}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <FormStateToRedux form="login" />
        <h2>LOGIN</h2>
        <div>
          
          <Field name="email" validate={check}> 
                  {({ input, meta }) => (
              <div>
                <input {...input} placeholder="Your login" />
                {meta.error && meta.touched && <span className={s.error}>{meta.error}</span>}
              </div>
            )}
                  </Field>
        
        </div>

        <h2>PASSWORD</h2>
        <Field
          name="password"
          validate={minLength}
          type='password'
          render={({ input, meta }) => (
            <div>
              <label>Bio</label>
              <input {...input} />
              {meta.touched && meta.error && <span className={s.error}>{meta.error}</span>}
            </div>
            
          )}
        />
        <h2>REMEMBER ME</h2>
        <div>
          <Field name="rememberMe" component="input" type="checkbox" />
        </div>
        <button type="submit">Submit</button>
      </form>
    )}
  />
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth, 
    error: state.auth.error_message, 
    isFetch: state.auth.isFetching
})
export default connect(mapStateToProps, {loginTC})(LoginForm)

//export default Login;