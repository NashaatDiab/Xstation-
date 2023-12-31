import {Link} from 'react-router-dom'
import React, { useState } from 'react';
import "./ForgetPassword.css"
import Check from '../../images/check.png'
const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [showForm, setShowForm] = useState(true);
  const [showImage, setShowImage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // إرسال رسالة تأكيد والبريد الإلكتروني إلى localStorage
    localStorage.setItem('email', email);
    // إخفاء النموذج وعرض الصورة
    setShowForm(false);
    setShowImage(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="Check">
      {showForm && (
        <form onSubmit={handleSubmit} className="form">
          <h1>Forget password?</h1>
          <p style={{opacity:".5"}}>No worries. Enter your account email address and <br /> we
will share a reset link</p>
<label>Email address</label> <br />
          <input
          className='email'
            type="email"
            placeholder="Example@email.com  "
            value={email}
            onChange={handleEmailChange}
            required
          /> 
       <div >
         <button type="submit" className='button1'> Get link </button> 
        </div>  
          <Link  className='d-flex justify-content-center' style={{ color:"#9291af",textDecoration:"none"}} to="/SignIn">Return to login</Link>
        </form> 
      )}
      {showImage && (
        <div className="image-container px-3">
          <img src={Check} alt="Check" />
          <h1><b>Check in your mail !</b></h1>
          <p style={{opacity:".5"}}>We just sent you a mail with the link to reset the password</p>
        </div>
      )}
    </div>
  );
};

export default ForgetPassword;

