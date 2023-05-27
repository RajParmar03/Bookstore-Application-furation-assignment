import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

import Styles from "./styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={Styles.navbar}>
      <div className={Styles.innerBox1}>
        <Link to="/">Home</Link>
        <Link to="/bookslist">Books List</Link>
        <Link to="/shoppincart">Shopping Cart</Link>
      </div>
      <div className={Styles.innerBox2}>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  )
}

export default Navbar;