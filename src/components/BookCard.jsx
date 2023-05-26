import { Box, Text } from '@chakra-ui/react';
import React from 'react';

import Styles from "./styles/BookCard.module.css";

const BookCard = (props) => {
    const {info , handleSingleBook} = props;
    const {_id , poster , title , genre , price , author} = info;
    
  return (
    <Box className={Styles.mainCard} onClick={() => handleSingleBook(_id)}>
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoKMiaiIcTbmL_xpkRWSsrWp3bKaYDLBMaEFC9wgf-5Q&usqp=CAU&ec=48665701"} alt={title} />
        <Text>Title : {title}</Text>
        <Text>Genre : {genre}</Text>
        <Text>Price : {price}</Text>
        <Text>author : {author}</Text>
    </Box>
  )
}

export default BookCard;