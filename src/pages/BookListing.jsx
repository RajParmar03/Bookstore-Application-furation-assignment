import { Box, Heading } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/dataManager/dataManager.action';
import BookCard from '../components/BookCard';

import Styles from "./styles/BookListing.module.css";
import { useNavigate } from 'react-router-dom';

const BookListing = () => {

  const dispatch = useDispatch();
  const data = useSelector(store => store.dataManager.data);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const handleSingleBook = (id) => {
    navigate(`/bookdetails/${id}`);
  }

  return (
    <Box>
      <Heading>List Of Books</Heading>
      <Box className={Styles.booksContainer}>
        {
          data.map((elem) => {
            return <BookCard key={elem._id} info={elem} handleSingleBook={handleSingleBook} />
          })
        }
      </Box>
    </Box>
  )
}

export default BookListing;