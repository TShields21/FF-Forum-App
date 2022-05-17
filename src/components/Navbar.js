import React from 'react'
import { Link } from 'react-router-dom';

 const Navbar = () => {
  return (
      <>
            <nav className="nav">
                <Link className="navItem" to="/">Home</Link>
                <Link className="navItem" to="/user">User</Link>
                <Link className="navItem" to="/settings">Settings</Link>
            </nav>
      </>
  );
}

export default Navbar;
