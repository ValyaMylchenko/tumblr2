
import s from './Message.module.css';
function Message(props) {
  return (
    <div className={s.mess}>
     {props.message}
    </div>
  );
}

export default Message;