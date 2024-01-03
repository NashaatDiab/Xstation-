import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  const buttons = [
    { name: " Sign In", id: "1 ", url: "/SignIn" },
  
  ];

  return (
    <div className="d-flex justify-content-around p-2 " style={{borderBottom:"2px solid rgba(99, 98, 140, 1)"}} >
      <Link to="/" style={{textDecoration:"none", color:"rgb(99,98,140)" , fontSize:"40px" ,marginLeft:"280px",marginRight:"650px" , marginBottom:"-10%"}}>XStation</Link>
      <nav>
        {buttons.map((button) => (
          <Link className="button  p-2" to={button.url} key={button.id}>
            {button.name}
          </Link>
        ))}
      </nav>
    </div>
    
  );
};

export default NavBar;
