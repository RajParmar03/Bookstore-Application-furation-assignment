import { Box, Button, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleBook } from '../redux/dataManager/dataManager.action';
import { addBookToCart, getUser } from '../redux/userManager/userManager.action';

const BookDetails = () => {

  const dispatch = useDispatch();
  const data = useSelector(store => store.dataManager.data);

  const params = useParams();

  useEffect(() => {
    dispatch(getSingleBook(params.id));
  }, []);

  const handleAddtoCart = (book) => {
    const token = localStorage.getItem("token");
    dispatch(addBookToCart(book , token)).then((res) => {
      if(res.isSuccess){
        dispatch(getUser(token)).then(() => {
          alert(res.msg);
        });
      }else{
        alert(res.msg);
      }
    });
  }


  return (
    <Box>
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoKMiaiIcTbmL_xpkRWSsrWp3bKaYDLBMaEFC9wgf-5Q&usqp=CAU&ec=48665701"} alt={data[0].title} />
        <Text>Title : {data[0].title}</Text>
        <Text>Genre : {data[0].genre}</Text>
        <Text>Price : {data[0].price}</Text>
        <Text>author : {data[0].author}</Text>
        <Button colorScheme='whatsapp' onClick={() => handleAddtoCart(data[0])}>Add to cart</Button>
    </Box>
  )
}

export default BookDetails;