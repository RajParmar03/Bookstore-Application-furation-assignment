import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import BookListing from '../pages/BookListing';
import BookDetails from '../pages/BookDetails';
import ShoppingCart from '../pages/ShoppingCart';
import Checkout from '../pages/Checkout';
import { Box } from '@chakra-ui/react';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import PrivateRouter from './PrivateRouter';

const AllRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/bookslist" element={<PrivateRouter><BookListing /></PrivateRouter>}></Route>
        <Route path="/bookdetails/:id" element={<PrivateRouter><BookDetails /></PrivateRouter>}></Route>
        <Route path="/shoppincart" element={<PrivateRouter><ShoppingCart /></PrivateRouter>}></Route>
        <Route path="/checkout" element={<PrivateRouter><Checkout /></PrivateRouter>}></Route>
      </Routes>
    </Box>
  )
}

export default AllRoutes;