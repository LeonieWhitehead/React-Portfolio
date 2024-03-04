import React from 'react';
import './Home.css';
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import Vector1 from '../assets/Vector1.png';
import Portrait from '../assets/Portrait.png';
import Vector2 from '../assets/Vector2.png'
const Home = () => {
return(
  <div className='homepage'>
    <div className='h-left'>
      <div className="h-name">
      <span>Hello,</span>
        <span>I'm Leonie👋</span>
        <span>A Front End Web Developer who strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</span>
      </div>

      <button className='button h-button'>Portfolio</button>

      <div className='h-social-icons'>
      <a href="https://github.com/LeonieWhitehead" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile"><IoLogoGithub className='h-icon'/></a>

      <a href="https://www.linkedin.com/in/leonie-whitehead/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile"><IoLogoLinkedin className='h-icon'/></a>
      </div>
    </div>

    <div className='h-right'>
    <img src={Vector2} alt="" />
    <img src={Portrait} alt="" />
    </div>
  </div>
)
}

export default Home;
