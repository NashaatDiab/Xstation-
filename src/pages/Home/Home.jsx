// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from '../../../src/img/ajpg.jpg';
import Slides from '../../../src/component/slider/slides'
import Google from '../../images/google.png'
import AppStore from '../../images/app.png'
import './Home.css'
function Home() {
 
  return (
<div>
<Slides />
<main className='container bg-wight mt-5' style={{backgroundColor:"#ffffff" , border:"none" , width:"52rem"}} >
<h1>Downlaod Our Application Now!</h1>
  <h2 style={{width:"370px"}}>We are available at both Android & IOS</h2>
<p>For using our services and meet with technician <br /> around the world we are waiting you there</p>

<img src={Google} className='img me-5 my-5 rounded-4' style={{width:"18rem"}} alt='Google' />
<img src={AppStore} style={{width:"18rem" }} className='rounded-4' alt='AppStore' />
</main>

</div>
  );
}

export default Home;