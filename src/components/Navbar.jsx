import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

import Styles from "./styles/Navbar.module.css";

const Navbar = () => {
  return (
    <Box className={Styles.navbar}>
      <Link to="/">Home</Link>
      <Link to="/bookslist">Books List</Link>
      <Link to="/shoppincart">Shopping Cart</Link>
    </Box>
  )
}

export default Navbar;