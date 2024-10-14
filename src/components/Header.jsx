// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function Navigation() {
//   return (
//     <nav className="nav-links">
//       <Link to="/">Home</Link>
//       <Link to="/about">About</Link>
//       <Link to="/contact">Contact</Link>
//     </nav>
//   );
// }

// function Header({ blogName }) {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header className="header">
//       <div className="header__container">
//         {/* Blog name section */}
//         <div className="header__blogName">
//           <h1>{blogName}</h1>
//         </div>

//         {/* Hamburger menu button for mobile */}
//         <button className="hamburger" onClick={toggleMenu}>
//           ☰
//         </button>

//         {/* Navigation menu: Apply 'active' class when menu is open */}
//         <nav className={`nav ${menuOpen ? "active" : ""}`}>
//           <ul>
//             <li>
//               {/* Replace <a> with <Link> for proper routing */}
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">News</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }

// Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header({ blogName }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__blogName">
          <h1>{blogName}</h1>
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header; // Ensure you export Header as default
