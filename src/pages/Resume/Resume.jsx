import ReactStars from "react-stars";
import React, { useState } from 'react';
import dot from "../../images/dot-single-svgrepo-com.svg"
// import ReactStars from 'react-stars'
import {Link} from "react-router-dom"
import './Resume.css'
function AvatarUploader() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setSelectedImage(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="Resume">
      <div className="column">
     <div style={{position:"relative"}}>
     <h2><Link to="/Dashboard"  style={{textDecoration:"none" , color:"#000"}} > Dashboard </Link></h2>
        <div className="circle" onClick={() => document.getElementById('imageInput').click()}>
          {selectedImage ? (
            <img src={selectedImage} alt="Avatar" className="avatar" />
          ) : (
          <h4>Image</h4> 
          )}
        <input
          type="file"
          id="imageInput"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
        </div>


     </div>
     <Link to="/SignIn"  style={{width:"100%" , textDecoration:"none"}} className="registerButton text-center">log out</Link>
      </div>

<div className='column1 mx-3'>

<h4>Nashaat Diab</h4>
<p>Plumber</p>
<h4>120 Rates</h4>

    <ReactStars  count={5} size={24} color2={"#ffd700"} />
</div>

<div className='column2 mx-5'>

<h4>My profile</h4>
<h4>About Me  </h4>
<p>Lorem Ipsum is simply dummy text of the printing and 
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
   when an unknown printer took a galley of type and scrambled it to make a type specimen v</p>
<h4>Specialist: </h4>
<img src={dot} alt="dot"  width={50}/>
<img src={dot} alt="dot"  width={50}/>
<img src={dot} alt="dot"  width={50}/>
<img src={dot} alt="dot"  width={50}/>



<h4>Work Experience: </h4>
<div className="d-flex align-items-start">
<img src={dot} alt="dot"  width={50}/>

<p className="py-2"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
   when an unknown printer took a galley of type and scrambled it to make a type specimen v</p>
   </div>
</div>


    </div>
  );
}

export default AvatarUploader;