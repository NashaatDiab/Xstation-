import React from 'react'
import { ChatIcon } from '../../component';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
  return (
    <footer className='px-5 py-3'>
<ChatIcon />

      <div  className='footer d-flex justify-content-between py-4 px-5'>
      <div className='me-5'>
        <h4>Contact info</h4>
        <p>Phone number : +(20) 010 08072385 </p>
        <p>Email : nashaatdiab7@gmail.com</p>
        <p>Address : Egypt - Cairo</p>
      </div>

      <div className='me-5'>
        <h4>Get Help</h4>
        <p>Contact Us</p>
        <p>Privacy Notice</p>
        <p>Terms & Conditions</p>
        <p>About Us</p>
      </div>

      <div>
        <h4>Popular Category</h4>
        <p>Plumber</p>
        <p>Electrician</p>
        <p>Carpenter</p>
      </div>
      </div>

      
      


      <div className=' text-light ps-5'>
    <div  >
    </div>
       <h3>You can find us there</h3>
       <Link to="" className='icon-facebook text-light me-5 font-lg' title='facebook' style={{fontSize:"1.5rem" ,cursor:"pointer"}}/>
       <Link to="" className='icon-linkedin2 text-light me-5 font-lg' title='linkedin' style={{fontSize:"1.5rem" ,cursor:"pointer"}}/>
       <Link to="" className='icon-mail  text-light me-5 ' title='mail' style={{fontSize:"1.5rem" ,cursor:"pointer"}} />
       <Link to="" className='icon-x  text-light font-lg' title='Mostaqel' style={{fontSize:"1.5rem" ,cursor:"pointer"}}/>
       </div>
    </footer>

  

  )
}

export default Footer