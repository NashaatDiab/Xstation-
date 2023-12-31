
import React, { useState } from 'react';
import './chat.css';
import 'emoji-picker-react';
import  Picker  from 'emoji-picker-react';

const ChatIcon = () => {
  const [isChatVisible, setIsChatVisible] = useState(true);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const toggleChatVisibility = () => {
    setIsChatVisible(!isChatVisible);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setMessages([...messages, message]);
      setMessage('');
      setShowEmojiPicker(false);
    }
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleEmojiClick = (emojiObject) => {
    setMessage(message + emojiObject.emoji);
  };

  return (
    <div className="chat-container " style={{color:"white"}}>
      {isChatVisible && (
        <div className="chat-button  icon-message" style={{backgroundColor:"rgb(99,98,140)" }}  onClick={toggleChatVisibility} />
      )}

      {!isChatVisible && (
        <div className="chat-popup">

          <div className="chat-header ">
            <div>
            <span className="close-icon icon-arrow_back_ios  me-2" onClick={toggleChatVisibility} />
            <span className='text-light'>Chat with us</span>
            </div>
            <div className="close-icon icon-close"  onClick={toggleChatVisibility} />
          </div>


          <div className="chat-body">
            <div className="messages ">
                <p className='text-dark ms-5'>XStation</p>
             <span className='p-2 ms-1 me-2' style={{background:"#8281a3", color:"#fff" , borderRadius:"50%"}}>XS</span>
             <span className='p-3' style={{backgroundColor:"#D9D9D9",color:"black" , borderRadius:"0 20px 0 10px"}}>How can i help you ?</span>
              {messages.map((msg, index) => (
                <div key={index} className="message" >{msg}</div>
              ))}
            </div>




            <div className="input-container1 input-group" >
            <div className="icon icon-link  me-5" style={{cursor:'pointer'}} />
            <button  className="emoji-button icon icon-emoji-happy text-dark " onClick={() => setShowEmojiPicker(!showEmojiPicker)} />
            
            <input
              className='p-2 rounded-5'
                type="text"
                placeholder="Reply here..."
                value={message}
                onChange={handleInputChange}
              />
              {showEmojiPicker && (
              <div style={{width:"500px" ,position:"absolute", left:"5px", bottom:"200px"}}> <Picker  onEmojiClick={handleEmojiClick}  /></div> 
              )}
             
            </div>
            <button  className="send-button rounded-5"  onClick={handleSendMessage} style={{backgroundColor:"#8281a3"}}>
                Send
              </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatIcon;

