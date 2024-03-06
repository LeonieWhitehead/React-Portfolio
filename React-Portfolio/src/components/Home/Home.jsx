import React from 'react';
import './Home.css';
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import Vector1 from '../assets/Vector1.png';
import Portrait from '../assets/Portrait.png';
import Vector2 from '../assets/Vector2.png'
const Home = () => {
return(
  <div className='container homepage'>
    <div className="row">
        <div className="col-md-6">
      <div className="h-name">
      <span>Hello,</span>
        <span>I'm Leonie👋</span>
        <span>A Front End Web Developer who strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</span>
      </div>

      <button className='btn h-button mt-3'>Portfolio</button>

      <div className='h-social-icons mt-3'>
      <a href="https://github.com/LeonieWhitehead" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile"><IoLogoGithub className='h-icon'/></a>

      <a href="https://www.linkedin.com/in/leonie-whitehead/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile"><IoLogoLinkedin className='h-icon'/></a>
      </div>
    </div>

    <div className='col-md-6'>
    <img src={Vector2} alt="" className="img-fluid" />
    <img src={Portrait} alt="" className="img-fluid" />
    </div>
      
    </div>
    </div>

);
};

export default Home;
