import React from 'react';

const Home = (props) => {
  return (
    <div className="home text-center"style={{ backgroundImage: `url(${props.backgroundImage})` }}>
    {props.children}
      <h1>Leonie Whitehead</h1>
      {/* headshot */}
      {/* brand statement */}
    </div>
);
};

export default Home;