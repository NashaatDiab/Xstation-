
import React, { useState } from 'react';
import './Register.css';
import Get from "../../images/GetStarted.png"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faEnvelope, faPhone, faLock } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('password', password);

    setSubmitted(true);
  };

  return (
    <div className="form-container-register mb-5">
      <img src={Get} width={268} alt="Get" />

      <h2>Get Started</h2>

      <p>by creating a free account.</p>

      <form onSubmit={handleSubmit} >

      <div className="input-group">
          <div className='d-flex '>
          <input
            type="text"
            placeholder="Client"
            className='me-3 '
            required
          />
          <input
            type="text"
            placeholder="Technician"
            required
          />
        </div>
        


        </div>




        
        <div className="input-group">
          <div className='d-flex '>
            <div className='me-3'>
        <div className="icon1 icon-user" />
          <input
            type="text"
            placeholder="First name"
            className=' '
            required
          />
</div>
<div>
          {/* <div className="icon icon-lock-closed" /> */}
        <div className="icon icon-user" />

          <input
            type="text"
            placeholder="Last name"
            required
          />
        </div>
        </div>
        
        </div>


        <div className="input-group">
        <div className="icon icon-user" />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder=" Username"
            required
          />
        </div>



        <div className="input-group w-100">
        <div className="icon icon-mail-envelope-closed" />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Valid email "
            required
          />
        </div>

        <div className="input-group">
        <div className="icon icon-browser-window" />

          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone number "
            required
          />
        </div>




        <div className="input-group">

          <div className='d-flex'>
          <div className="icon1 icon-lock" />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Strong Password "
            className='me-3'
            required
          />

<div className="icon icon-lock" />

<input
            type="password"
            placeholder="Rewrite-Password  "
            required
          />
          
          </div>

        </div>



        <div className="checkbox-group">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className='me-2 my-3'
            
          />
          <label>Accept all terms & Agreements</label>
        </div>

        <button type="submit" className='rounded-4 ' style={{backgroundColor:"#9291af"}}>Welcome Here</button>
      </form>

      {submitted && <p>تم التسجيل بنجاح!</p>}
    </div>
  );
};

export default Register;