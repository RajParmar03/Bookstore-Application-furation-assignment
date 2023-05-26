import { Box, Text } from '@chakra-ui/react';
import React from 'react';

import Styles from "./styles/BookCard.module.css";

const BookCard = (props) => {
    const {info} = props;
    const {id , poster , title , genre , price , author} = info;
  return (
    <Box className={Styles.mainCard}>
        <img src={poster} alt={title} />
        <Text>Title : {title}</Text>
        <Text>Genre : {genre}</Text>
        <Text>Price : {price}</Text>
        <Text>author : {author}</Text>
    </Box>
  )
}

export default BookCard;