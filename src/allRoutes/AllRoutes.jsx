import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import BookListing from '../pages/BookListing';
import BookDetails from '../pages/BookDetails';
import ShoppingCart from '../pages/ShoppingCart';
import Checkout from '../pages/Checkout';
import { Box } from '@chakra-ui/react';

const AllRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/bookslist" element={<BookListing />}></Route>
        <Route path="/bookdetails/:id" element={<BookDetails />}></Route>
        <Route path="/shoppincart" element={<ShoppingCart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
    </Box>
  )
}

export default AllRoutes;