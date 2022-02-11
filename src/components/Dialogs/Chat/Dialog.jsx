
import s from './Dialog.module.css';
import Message from './Message/Message';
import MyMessage from './Message/MyMessage';
function Dialog(props) {
  return (
    <div className={s.dialog}>
     <Message text={props.othermessage} />
     <MyMessage text={props.mymessage} />
     
    </div>
  );
}

export default Dialog;