import React from 'react'
import './Technicians.css'
import { Link } from 'react-router-dom'
import { RiHome2Line } from "react-icons/ri";
import { FaTheaterMasks } from "react-icons/fa";
import { MdStars } from "react-icons/md";
import { RiUserStarFill } from "react-icons/ri";

// import Tabs from '../../component/Tabs/Tabs'
const Technicians = () => {
  return (
    <div className=' d-flex '>

<div className="column px-5">
     <div >
     <h2 style={{marginBottom:"100px"}}> Dashboard </h2>
 
 
 <h4 className='p-3'> <Link to="/Dashboard" style={{textDecoration:"none" , color:"#000"}}><FaTheaterMasks /> Customers</Link> </h4>
 <h4 className='p-3' > <Link to="#"  style={{textDecoration:"none" , color:"#000"}}><RiUserStarFill /> Technicians</Link>  </h4>
 <h4 className='p-3'><Link to="/StarRating" style={{textDecoration:"none" , color:"#000"}} ><MdStars /> Star Rating</Link>  </h4>


     </div>
     <Link to="/SignIn"  style={{width:"100%" , textDecoration:"none"}} className="registerButton text-center">log out</Link>
      </div>

<div className='' style={{width:"80%"}}>
        <h3 className=' w-100 pt-3 px-3' style={{backgroundColor:"#f1f1f1" , height:"100px" , opacity:".5"}}><RiHome2Line />- Dashboard - List</h3>
<br />




<div style={{display:"flex" , justifyContent:"flex-start"}}> 
 <button className='px-3 mx-5' style={{backgroundColor:"#63628c"}}>+ New Technician  </button></div>
    <div>
<div className='mt-3 mx-3 px-5 py-2' style={{backgroundColor:"#dedede" , alignItems:"center"}}>
<h2>Technician Details </h2>
<div style={{display:"flex" ,justifyContent:"space-between"}}>
<div>
    <label>First Name </label> <br />
    <input type="text" name="First Name " id="" /> <br />
    <label>Phone Number  </label> <br />
    <input type="number" name="Phone Number " id="" /><br />
    <label>Role  </label> <br />
    <input type="list" name="Role " id="" />
</div>
<div>
<label>Last Name  </label> <br />
    <input type="text" name="First Name " id="" /> <br />
    <label>Username </label> <br />
    <input type="text" name="First Name " id="" /> <br />
    

</div>
<div>
<label>Email </label> <br />
    <input type="Email" name="First Name " id="" /> <br />
    <label>Password  </label> <br />
    <input type="number" name=" Number " id="" /><br />
</div>


</div>

 <div className='mx-2' style={{display:"flex" , justifyContent:"flex-end" , alignItems:"center"}}> 
        <button style={{backgroundColor:"#63628c"}}>Save</button>
        <button className='mx-3' style={{backgroundColor:"#63628c"}}>Close</button>
</div>
</div>
    </div>












</div>





    
    
    </div>
  )
}

export default Technicians