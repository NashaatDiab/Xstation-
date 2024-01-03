// eslint-disable-next-line no-unused-vars
import ReactStars from "react-stars";
import React, { useState } from 'react';

// import ReactStars from 'react-stars'
import {Link} from "react-router-dom"
import './Resume.css'
function AvatarUploader() {
  const [ setSelectedImage] = useState(null);

  // eslint-disable-next-line no-unused-vars
  const handleImageChange = (event) => {

    const reader = new FileReader();

    reader.onload = (e) => {
      setSelectedImage(e.target.result);
    };

  };

  return (
    
    <div className="Resume">
      <div className="column">
     <div style={{position:"relative"}}>
     
     <h2><Link to="/Dashboard"  style={{textDecoration:"none" , color:"#000"}} > Dashboard </Link></h2>
        


     </div>
     <Link to="/SignIn"  style={{width:"100%" , textDecoration:"none"}} className="registerButton text-center">log out</Link>
      </div>






    </div>
  );
}

export default AvatarUploader;