import React from 'react';

const Home = ({ children }) => {
  const backgroundImage = '/background.jpg';

  return (
    <div className="home text-center"style={{ backgroundImage: `url(${backgroundImage})` }}>
    {children}
      <h1>Hello, I'm Leonie<span role="img" aria-label="Waving Hand">👋</span></h1>
      {/* headshot */}
      <p>I'm a Front End Web Developer based in Manchester, England. I strive to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p>
    </div>
);
};

export default Home;