
import List from './Chat/List/List';
import s from './Dialogs.module.css';
import Message from './Chat/Message/Message';
import MyMessage from './Chat/Message/MyMessage';
import React from 'react';
import DialogForm from './FormDialogs';


function Dialogs(props) {

  let dialogsElements = props.state.messages.map( mess => <Message message={mess.message} id={mess.id} />)
  let mydialogsElements = props.state.mymessages.map( mymess => <MyMessage message={mymess.message} id={mymess.id}/>)


  let addMessage = (message) => {
    props.addMessage(message);
  }
  
  return (
    <div className={s.dialogs}>
      <div className={s.conversation}>
        <div className={s.title}>{props.name}</div>
        <div className={s.messages}>
          
          {dialogsElements}
          {mydialogsElements}
          
          {/* <Route exact render={()=><Dialog mymessage={mymessage} othermessage={"dfgd)"}/>} path="/dialogs/1" />
          <Route exact render={()=><Dialog mymessage={othermessage} othermessage={"dfbdf?)"}/>} path="/dialogs/2" /> */}
        </div>
        {/* <div className={s.ent_mes}>
          <textarea value={props.newMessageText} className={s.textarea} onChange={ onupdateTextDialogs }></textarea>
          <button type="submit" onClick={addMessage}>Sent!</button>
        </div> */}
        <DialogForm addMessage={addMessage} />
      </div>
      <div className={s.list}>
        <List />
      </div>
    </div>
  );
}

export default Dialogs;