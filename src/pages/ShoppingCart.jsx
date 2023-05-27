import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser, removeBookFromCart } from '../redux/userManager/userManager.action';

const ShoppingCart = () => {

  const [cartList, setCartList] = useState([]);

  const userCart = useSelector((store) => store.userManager.user.cart);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    setCartList(userCart);
  }, [userCart]);


  const handleSingleBook = (id) => {
    navigate(`/bookdetails/${id}`);
  }

  const handleRemoveFromCart = (book) => {
    const token = localStorage.getItem("token");
    dispatch(removeBookFromCart(book , token)).then((res) => {
      if(res){
        dispatch(getUser(token)).then(() => {
          alert("successfully removed from cart.");
        });
      }else{
        alert("failed to remove from cart");
      }
    });
  }

  console.log("this is cartlist from shopp : " , cartList);

  return (
    <div>
      {
        cartList.map((elem , i) => {
          return (
            <div key={elem._id + i} onClick={() => handleSingleBook}>
              <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoKMiaiIcTbmL_xpkRWSsrWp3bKaYDLBMaEFC9wgf-5Q&usqp=CAU&ec=48665701"} alt={elem.title} />
              <p>Title : {elem.title}</p>
              <p>Genre : {elem.genre}</p>
              <p>Price : {elem.price}</p>
              <p>author : {elem.author}</p>
              <button style={{zIndex:1}} onClick={() => handleRemoveFromCart(elem)}>Remove from cart</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default ShoppingCart;