import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Styles from "./styles/checkout.module.css";


const Checkout = () => {

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    } , 2000);
  } , []);

  return (
    <div className={Styles.mainBox}>
      <h1>YOUR ORDER IS PLACED SUCCESSFULLY....</h1>
    </div>
  )
}

export default Checkout;