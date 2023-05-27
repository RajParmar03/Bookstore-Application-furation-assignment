import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart, getUser, removeBookFromCart } from '../redux/userManager/userManager.action';

import Styles from "./styles/shoppingCart.module.css";

const ShoppingCart = () => {

  const [cartList, setCartList] = useState([]);

  const [total, setTotal] = useState(0);

  const userCart = useSelector((store) => store.userManager.user.cart);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    let newTotal = userCart.reduce((acc, elem) => {
      return acc + elem.price;
    }, 0);
    setTotal(newTotal);
    setCartList(userCart);
  }, [userCart]);


  const handleSingleBook = (id) => {
    navigate(`/bookdetails/${id}`);
  }

  const handleRemoveFromCart = (book) => {
    const token = localStorage.getItem("token");
    dispatch(removeBookFromCart(book, token)).then((res) => {
      if (res) {
        dispatch(getUser(token)).then(() => {
          alert("successfully removed from cart.");
        });
      } else {
        alert("failed to remove from cart");
      }
    });
  }

  const handleCheckout = () => {
    const token = localStorage.getItem("token");
    dispatch(clearCart(token)).then((res) => {
      if (res) {
        dispatch(getUser(token)).then(() => {
          alert("successfully placed your order.");
          navigate("/checkout");
        });
      } else {
        alert("failed in placing the order");
      }
    });
  }

  console.log("this is cartlist from shopp : ", cartList);

  return (
    <div className={Styles.parentBox}>
      <div className={Styles.mainBox}>
        {
          cartList.map((elem, i) => {
            return (
              <div key={elem._id + i} onClick={() => handleSingleBook}>
                <div className={Styles.imageBox}>
                  <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoKMiaiIcTbmL_xpkRWSsrWp3bKaYDLBMaEFC9wgf-5Q&usqp=CAU&ec=48665701"} alt={elem.title} />
                </div>
                <div className={Styles.detailsBox}>
                  <p>Title : {elem.title}</p>
                  <p>Genre : {elem.genre}</p>
                  <p>Price : {elem.price}</p>
                  <p>author : {elem.author}</p>
                  <button style={{ zIndex: 1 }} onClick={() => handleRemoveFromCart(elem)}>Remove from cart</button>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className={Styles.totalBox}>
        <p>Total Item : {cartList.length}</p>
        <p>Total Cost : {total}</p>
        <button onClick={() => handleCheckout()}>Checkout</button>
      </div>
    </div>
  )
}

export default ShoppingCart;