import { Box, Heading } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/dataManager/dataManager.action';
import BookCard from '../components/BookCard';

import Styles from "./styles/BookListing.module.css";

const BookListing = () => {

  const dispatch = useDispatch();
  const data = useSelector(store => store.dataManager.data);

  useEffect(() => {
    dispatch(getData());
  }, []);

  // console.log("this is data from booklisting page : " , data);


  return (
    <Box>
      <Heading>List Of Books</Heading>
      <Box className={Styles.booksContainer}>
        {
          data.map((elem) => {
            return <BookCard key={elem.id} info={elem} />
          })
        }
      </Box>
    </Box>
  )
}

export default BookListing;