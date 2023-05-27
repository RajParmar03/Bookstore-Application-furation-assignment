import { Box, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterBooks, getBooks, searchBooks } from '../redux/dataManager/dataManager.action';
import BookCard from '../components/BookCard';

import Styles from "./styles/BookListing.module.css";
import { useNavigate } from 'react-router-dom';


const BookListing = () => {

  const [bookList , setBookList] = useState([]);

  const dispatch = useDispatch();
  const data = useSelector(store => store.dataManager.data);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  useEffect(() => {
    setBookList(data);
  } , [data]);

  const handleSingleBook = (id) => {
    navigate(`/bookdetails/${id}`);
  }

  const handleFilter = (genre) => {
    dispatch(filterBooks(genre));
  }

  const handleSearch = (query) => {
    dispatch(searchBooks(query));
  }

  return (
    <Box>
      <Heading>List Of Books</Heading>
      <div>
        <select onChange={(e) => handleFilter(e.target.value)}>
          <option value={""}>Filter By Genre</option>
          <option value={"fiction"}>fiction</option>
          <option value={"novel"}>novel</option>
          <option value={"narrative"}>narrative</option>
          <option value={"science-fiction"}>science-fiction</option>
          <option value={"fantacy"}>fantacy</option>
          <option value={"thriller"}>thriller</option>
          <option value={"history"}>history</option>
          <option value={"self-help"}>self-help</option>
        </select>
        <input type='text' placeholder="Search books" onChange={(e) => handleSearch(e.target.value)}/>
      </div>
      <Box className={Styles.booksContainer}>
        {
          bookList.map((elem) => {
            return <BookCard key={elem._id} info={elem} handleSingleBook={handleSingleBook} />
          })
        }
      </Box>
    </Box>
  )
}

export default BookListing;