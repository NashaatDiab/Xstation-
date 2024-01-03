import React, { useState } from 'react';
import './SignIn.css';
import facebook from '../../social-facebook-ico.svg'
import google from '../../images/icons8-google.svg'
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // if (!validateEmail(email)) {
    //   alert('يرجى إدخال بريد إلكتروني صحيح');
    //   return;
    // }

    // if (password.trim() === '') {
    //   alert('يرجى إدخال كلمة المرور');
    //   return;
    // }

    // يمكنك إجراء المزيد من التحقق من صحة البيانات هنا

    // حفظ البيانات في الـ localStorage

    navigate('/Resume');

    // يمكنك إرسال البيانات إلى الخادم أو إجراء إجراء آخر

    
    setEmail('nashaatdiab7@gmail.com');
    setPassword('');
  };

  // const validateEmail = (email) => {
  //   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return re.test(email);
  // };

  return (
    <div className="container">
      <h2 className="welcome-message">Welcome Back!</h2>
      <form className="form col-lg-5 col-md-7 mt-5  pe-3" onSubmit={handleSubmit}>
        <div className="input-group m-3 mb-4">
            <div
              // src={img1}
              alt="Email"
              className="icon2 icon-email"
            />
            
          <input
            type="email"
            autoComplete='none'
            className="input-field rounded-5  ps-5"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="input-group m-3 mb-4" >
            <div
              className="icon2 icon-lock-closed"
            />
          <input
            type="password"
            className="input-field  rounded-5 ps-5"
            placeholder="Password "
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <div className="remember-me m-3">
          <input type="checkbox" id="remember" className='me-2' />
          <label htmlFor="remember ">  Stay conncted</label>
        </div>
        <div className="form-buttons ms-3">
          <button className="register-button" type="submit"  onClick={(params) => {
            fetch("https://xstation2001.000webhostapp.com/auth/login")
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
          }
          }>Log in</button>
          <Link to="/ForgetPassword" className="forgot-password-link" style={{color:"#9291af" , textDecoration:"none"}} > Forget Password? </Link>
        </div>
      </form>
      <div className="divider">
      <span className="divider-text">OR</span>
      </div>
      <div className="social-buttons">
        <button className="social-button ">
          <img
            src={google}
            alt="google"
            className="social-icon"
            width={20}
          />
          <span className="social-link-text text-dark" style={{fontSize:"12px"}}>Continue with Google</span>
        </button>
        <button className="social-button" >
          <img
            src={facebook}
            width={20}
            alt="Facebook"
            className="social-icon"
          />
          <span className="social-link-text text-dark" style={{fontSize:"12px"}}>Continue with Facebook</span>
        </button>
      </div>
    </div>
  );
}

export default SignIn;