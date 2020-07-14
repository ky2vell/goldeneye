import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/protected'>Protected Page</Link>
      </nav>
    </header>
  );
};

export default Header;
