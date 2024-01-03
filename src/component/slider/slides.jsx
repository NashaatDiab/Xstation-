import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './slide.css'
import img1   from '../../images/male-electrician-works-switchboard-with-electrical-connecting-cable.jpg';
import img2   from '../../images/male-plumber-working-fix-problems-client-s-house.jpg';
import img3   from '../../images/man-working-wood-engraving-workshop.jpg';
// import img from '../../social-facebook-ico.svg'

const Slides = () => {
const slider =[
  {title: 'Welcome to ',id:"1" ,titleText: 'XStation' ,img :<img src={img1} alt='' style={{width:"100%" , height:"700px"}}/> , images:"../../images/male-electrician-works-switchboard-with-electrical-connecting-cable.jpg" , paragraph :'Finally you arrived to your destination with us', paragraph1 :' Start a new way with us toward your goal to', paragraph2 :'discover new ways to work and to enter ', paragraph3 :'new era of online jobs.'},
  {title: 'Welcome to ',id:"2" ,titleText: 'XStation' ,img :<img src={img2} alt='' style={{width:"100%" , height:"700px"}}/> , images:"../../images/male-plumber-working-fix-problems-client-s-house.jpg", paragraph :'Finally you arrived to your destination with us', paragraph1 :' Start a new way with us toward your goal to', paragraph2 :'discover new ways to work and to enter ', paragraph3 :'new era of online jobs.  '},
  {title: 'Welcome to ',id:"3" ,titleText: 'XStation' ,img :<img src={img3} alt='' style={{width:"100%" , height:"700px"}}/>, images:"../../images/man-working-wood-engraving-workshop.jpg", paragraph :'Finally you arrived to your destination with us', paragraph1 :' Start a new way with us toward your goal to', paragraph2 :'discover new ways to work and to enter ', paragraph3 :'new era of online jobs.  '}
  
]

  return (
    <Carousel className='container-fluide'>



{slider.map((slide)=>(
   <Carousel.Item  key={slide.id}>
{/* <img  src={slide.img } alt='' text="First slide"  style={{width:"100%" , height:"450px"}} /> */}

{slide.img}
   {/* <div style={{ width:"1920px" , height:"818px" , backgroundColor:"rgb(224,224,232)"}}  /> */}
   <Carousel.Caption style={{position:"absolute", textAlign:"justify" , left:"20rem" ,top:"5rem" , width:"50rem", lineHeight:"1.2rem" , color:"white"}}>
     <h4 style={{fontSize:"100px " , color:"white"}}> {slide.title} <br /><span style={{color:"rgb(99,98,140)" }}>{slide.titleText} </span> </h4>
     <p className='w-5' width="100px" style={{textAlign:"justify"}} >{slide.paragraph}<br/> {slide.paragraph1} <br/>{slide.paragraph2} <br/> {slide.paragraph3}</p>
   </Carousel.Caption>
 </Carousel.Item>
                      
))}
      
      </Carousel>

  )}  


export default Slides