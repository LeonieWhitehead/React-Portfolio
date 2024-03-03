import React from "react";
import "./header.css";

const Navbar = () => {
  return (
    <>
      <div className="n-wrapper">
        <div className="n-left">
          <div className="n-name">Leonie</div>
          <span>toggle</span>
        </div>
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>Home</li>
            <li>Services</li>
            <li>Experience</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <button className="button n-button">Contact</button>
      </div>
    </>
  );
};

export default Navbar;

// import { Link, NavLink } from 'react-router-dom';
// // import "src/app.css";
// // import Navbar from 'react-bootstrap/Navbar'

// const Header = () => {
//   return (
//     <header>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav">
//             <li className="nav-item">
//               <NavLink
//                 to="/"
//                 end
//                 className={({ isActive }) =>
//                   isActive ? 'nav-link active' : 'nav-link'
//                 }
//               >
// Home
//         </NavLink>
//         </li>

//         <li className="nav-item">
//         <NavLink
//         to="/projects"
//         className={({isActive}) => isActive? "nav-link active": "nav-link"
//         }
//         >
//           Projects</NavLink>
//           </li>

//           <li className='nav-item'>
//         <NavLink to="/contact"
//         className={({isActive}) =>
//         isActive? 'nav-link active' : 'nav-link'
//       }
//         >Contact
//         </NavLink>
//     </li>
//     </ul>
//     </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
