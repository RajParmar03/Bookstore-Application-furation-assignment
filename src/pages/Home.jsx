import React from 'react';

import Styles from "./styles/home.module.css";
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className={Styles.mainBox}>
      <h1>WELCOME TO THE BOOKSTORE</h1>
      <button onClick={() => {
        navigate("/bookslist")
      }}>BROWSE BOOKS...</button>
    </div>
  )
}

export default Home;