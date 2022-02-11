import s from './MyMessage.module.css';
function MyMessage(props) {
  return (
    <div className={s.mymess}>
     {props.message}
    </div>
  );
}

export default MyMessage;