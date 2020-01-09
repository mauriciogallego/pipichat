import React, { useState } from 'react';
import './ChatContent.css';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';



const ChatContent = props => {

  const [checked, setChecked] = useState(false)
  const checkedHandler = () => {
    setChecked(!checked);
  }

  const[enteredMessage,setEnterdMessage]=useState('')
 
  console.log(enteredMessage)


  const [messages = [
    {
      id: '0',
      user: 'me',
      content: ' ohh ohh Vamo lo eston',
      reaction: '',
    },
    {
      id: '1',
      user: 'other',
      content: 'lo eston',
      reaction: ''
    },
    {
      id: '3',
      user: 'me',
      content: 'lo eston',
      reaction: ''
    },
    {
      id: '4',
      user: 'me',
      content: ' vamo lo eston',
      reaction: ''
    },


  ]] = useState();


  return (
    <div>
      {messages.map(msg =>
        <div id="messageTab" className='column bg-dark text-white p-2 m-1 rounded w-50'>
          <p id="userName" className="ml-3">{msg.user}</p>
          <p>{msg.content}</p>

          <div id="notification">
            {/* {checked == false ? <p className="mb-0" >llego</p> : <p className="mb-0" >lei</p>} */}
            {/* {checked == false ? <> <p className="mb-0" >llego</p> 
            <p className="pl-2">dd/mm/aaaa  hh:mm:ss</p> </>:
             <> <p className="mb-0" >lei </p> 
             <p className="pl-2">dd/mm/aaaa  hh:mm:ss</p> </>} */}
            {checked == false ?
              <div className="row mw-100 ml-0">
                <p className="col-10 mb-0 pl-2">dd/mm/aaaa  hh:mm:ss</p>
                <p className="col-2 mb-0" >llego</p>
              </div> :
              <div className="row mw-100  ml-0">
                <p className="col-10 mb-0 pl-2">dd/mm/aaaa  hh:mm:ss</p>
                <p className="col-2 mb-0" >lei </p>
              </div>}
          </div>
        </div>)}
        <input onChange={event=>setEnterdMessage(event.target.value)}></input><Button >Enviar</Button>
      <Button onClick={checkedHandler}>Notif</Button>
    </div>
  );
};

ChatContent.propTypes = {

};

export default ChatContent;