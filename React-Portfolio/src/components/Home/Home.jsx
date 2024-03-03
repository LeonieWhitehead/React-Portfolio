import React from 'react';
import './Home.css';
const Home = () => {
return(
  <div className='homepage'>
    <div className='h-left'>
      <div className="h-name">
      <span>Hello,</span>
        <span>I'm Leonie👋</span>
        <span>A Front End Web Developer who strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</span>
      </div>

      <button className='button h-button'>Hire me</button>
      
    </div>
    <div className='h-right'></div>

    i am right side
  </div>
)
}

export default Home;
//   const backgroundImage = '/background.jpg';

//   return (
//     <div className="home text-center"style={{ backgroundImage: `url(${backgroundImage})` }}>
//     {children}
//       <h1>Hello, I'm Leonie<span role="img" aria-label="Waving Hand">👋</span></h1>
//       {/* headshot */}
//       <p>I'm a Front End Web Developer based in Manchester, England. I strive to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p>
//     </div>
// );
// };