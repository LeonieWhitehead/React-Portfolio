import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Navbar = () => {
  return (
    <>
      <div className="n-wrapper navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <div className="n-left">
          <div className="n-name">Leonie</div>
          <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
          <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="n-list collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/project-gallery" className="nav-link">
                  Project Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/projects" className="nav-link">Portfolio</Link>
                </li>
              <li className="nav-item">Testimonials</li>
            </ul>
          </div>
          <button className="button n-button">Contact</button>
        </div>
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
