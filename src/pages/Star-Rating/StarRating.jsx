import React from 'react'
import './Star-Rating.css'
import ReactStars from "react-stars";
import { RiHome2Line } from "react-icons/ri";
import { FaTheaterMasks } from "react-icons/fa";
import { MdStars } from "react-icons/md";
import { RiUserStarFill } from "react-icons/ri";



import { Link } from 'react-router-dom'
const StarRating = () => {
  return (
    <div className=' d-flex '>

<div className="column px-5">
     <div >
     <h2 style={{marginBottom:"100px"}}> Dashboard </h2>
 
 
 <h4 className='p-3'> <Link to="/Dashboard" style={{textDecoration:"none" , color:"#000"}}><FaTheaterMasks /> Customers</Link> </h4>
 <h4 className='p-3'> <Link to="/Technicians" style={{textDecoration:"none" , color:"#000"}} ><RiUserStarFill /> Technicians</Link>  </h4>
 <h4 className='p-3'><Link to="#" style={{textDecoration:"none" , color:"#000"}}><MdStars /> Star Rating </Link> </h4>


     </div>
     <Link to="/SignIn"  style={{width:"100%" , textDecoration:"none"}} className="registerButton text-center">log out</Link>
      </div>

<div className='' style={{width:"80%"}}>
        <h3 className=' w-100 pt-3 px-3' style={{backgroundColor:"#f1f1f1" , height:"100px" , opacity:".5" , alignItems:"center"}}>    <RiHome2Line />
- Dashboard - List</h3>
<br />
<div className='mx-5' style={{display:"flex" , flexDirection:"column" , position:"relative"}}>

<div className='mb-5 p-4  rounded-5 d-flex align-items-center  ' style={{backgroundColor:"#cdcdda" , flexWrap:"wrap"}}>
   <div style={{width:'70px' , height:"70px" , backgroundColor:"#fff" , borderRadius:"50%"}}></div>
   <div>
     <h2 className='ms-3'> Lorem ipsum.</h2>

   <ReactStars className='ms-3'  count={5} size={24} color2={"#ffd700"} />
   </div>
   <p style={{position:"absolute" , right:"25px" , top:"17%"}}>10:30PM</p>
</div>


<div className='mb-5 p-4  rounded-5 d-flex align-items-center  ' style={{backgroundColor:"#cdcdda" , flexWrap:"wrap"}}>
   <div style={{width:'70px' , height:"70px" , backgroundColor:"#fff" , borderRadius:"50%"}}></div>
   <div>
     <h2 className='ms-3'> Lorem ipsum.</h2>

   <ReactStars className='ms-3'  count={5} size={24} color2={"#ffd700"} />
   </div>
   <p style={{position:"absolute" , right:"25px" , top:"50%"}}>10:30PM</p>
</div>


<div className='mb-5 p-4  rounded-5 d-flex align-items-center  ' style={{backgroundColor:"#cdcdda" , flexWrap:"wrap"}}>
   <div style={{width:'70px' , height:"70px" , backgroundColor:"#fff" , borderRadius:"50%"}}></div>
   <div>
     <h2 className='ms-3'> Lorem ipsum.</h2>

   <ReactStars className='ms-3'  count={5} size={24} color2={"#ffd700"} />
   <p style={{position:"absolute" , right:"25px" , top:"85%"}}>10:30PM</p>
   </div>
</div>



</div>




  












</div>





    
    
    </div>
  )
}

export default StarRating