import { Box, Button, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getSingleBook } from '../redux/dataManager/dataManager.action';
import { addBookToCart, getUser } from '../redux/userManager/userManager.action';

import Styles from "./styles/BookDetails.module.css";

const BookDetails = () => {

  const dispatch = useDispatch();
  const data = useSelector(store => store.dataManager.data);

  const params = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSingleBook(params.id));
  }, []);

  const handleAddtoCart = (book) => {
    const token = localStorage.getItem("token");
    dispatch(addBookToCart(book , token)).then((res) => {
      if(res.isSuccess){
        dispatch(getUser(token)).then(() => {
          alert(res.msg);
          navigate("/shoppincart");
        });
      }else{
        alert(res.msg);
      }
    });
  }


  return (
    <div className={Styles.mainBox}>
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoKMiaiIcTbmL_xpkRWSsrWp3bKaYDLBMaEFC9wgf-5Q&usqp=CAU&ec=48665701"} alt={data[0].title} />
        <p>Title : {data[0].title}</p>
        <p>Genre : {data[0].genre}</p>
        <p>Price : {data[0].price}</p>
        <p>author : {data[0].author}</p>
        <button onClick={() => handleAddtoCart(data[0])}>Add to cart</button>
    </div>
  )
}

export default BookDetails;