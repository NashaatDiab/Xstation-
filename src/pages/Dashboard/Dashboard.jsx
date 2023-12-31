import React from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'

import { RiHome2Line } from "react-icons/ri";
import { FaTheaterMasks } from "react-icons/fa";
import { MdStars } from "react-icons/md";
import { RiUserStarFill } from "react-icons/ri";

// import Tabs from '../../component/Tabs/Tabs'

const Dashboard = () => {
  return (
    <div className=' d-flex '>

<div className="column px-5">
     <div >
     <h2 style={{marginBottom:"100px"}}> Dashboard </h2>
 
 
 <h4 className='p-3'> <Link to={"#"} style={{textDecoration:"none" , color:"#000"}}><FaTheaterMasks />   Customers</Link> </h4>
 <h4 className='p-3'> <Link to="/Technicians" style={{textDecoration:"none" , color:"#000"}}><RiUserStarFill /> Technicians</Link>  </h4>
 <h4 className='p-3'><Link to="/StarRating" style={{textDecoration:"none" , color:"#000"}} ><MdStars />  Star Rating</Link>  </h4>


     </div>
     <Link to="/SignIn"  style={{width:"100%" , textDecoration:"none"}} className="registerButton text-center">log out</Link>
      </div>

<div className='' style={{width:"80%"}}>
        <h3 className=' w-100 pt-3 px-3' style={{backgroundColor:"#f1f1f1" , height:"100px" , opacity:".5"}}><RiHome2Line />- Dashboard - List</h3>
<br />




<div style={{display:"flex" , justifyContent:"flex-end"}}> <button style={{backgroundColor:"#63628c"}}>Search </button> <button className='px-3 mx-2' style={{backgroundColor:"#63628c"}}>Reset </button></div>
    <div>
<div className='mt-3 mx-3' style={{display:"flex" , justifyContent:"space-around " , opacity:".5" ,backgroundColor:"#dedede" , alignItems:"center"}}>
<p>Enter Name </p>
<p>Email</p>
<p>Mobil</p>
<p>DD/MM/YYYY</p>
</div>
 <div className='mx-3' style={{display:"flex" , justifyContent:"space-between" ,backgroundColor:"#e9e9e9" , alignItems:"center"}}> 
 <div className='pe-1' style={{height:"300px"}}></div>

 <div style={{height:"300px"}}></div>


 <div style={{height:"300px"}}></div>


 <div style={{height:"300px"}}></div>
</div>
    </div>

</div>
    
    </div>
  )
}

export default Dashboard