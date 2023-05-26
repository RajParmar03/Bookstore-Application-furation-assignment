import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleBook } from '../redux/dataManager/dataManager.action';

const BookDetails = () => {

  const dispatch = useDispatch();
  const data = useSelector(store => store.dataManager.data);

  const params = useParams();

  useEffect(() => {
    dispatch(getSingleBook(params.id));
  } , []);

  console.log(data);


  return (
    <Box>
      
    </Box>
  )
}

export default BookDetails;