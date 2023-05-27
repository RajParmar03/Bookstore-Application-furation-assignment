import { FILTER_BOOKS, GET_BOOKS, GET_SINGLE_BOOK, SEARCH_BOOKS } from "./dataManager.actionType";

// const baseUrl = "http://localhost:8080";
const baseUrl = "https://bookstore-application-furation-assignment-bakend.vercel.app";


export const getBooks = () => async (dispatch) => {
    try {
        const responce = await fetch(`${baseUrl}/books`);
        const res = await responce.json();
        dispatch({ type: GET_BOOKS, payload: res.data });
    } catch (error) {
        console.log("error is occured in getData function", error);
        dispatch({ type: GET_BOOKS, payload: [] });
    }
}

export const getSingleBook = (id) => async (dispatch) => {
    try {
        const responce = await fetch(`${baseUrl}/books/book/${id}`);
        const res = await responce.json();
        dispatch({ type: GET_SINGLE_BOOK, payload: res.data });
    } catch (error) {
        console.log("error is occured in getSingleData function", error);
        dispatch({ type: GET_SINGLE_BOOK, payload: [] });
    }
}

export const filterBooks = (genre) => async (dispatch) => {
    try {
        const responce = await fetch(`${baseUrl}/books/filter?filter=${genre}`);
        const res = await responce.json();
        dispatch({ type: FILTER_BOOKS, payload: res.data });
    } catch (error) {
        console.log("error is occured in filterBooks function", error);
        dispatch({ type: FILTER_BOOKS, payload: [] });
    }
}

export const searchBooks = (query) => async (dispatch) => {
    try {
        const responce = await fetch(`${baseUrl}/books/search?search=${query}`);
        const res = await responce.json();
        dispatch({ type: SEARCH_BOOKS, payload: res.data });
    } catch (error) {
        console.log("error is occured in searchBooks function", error);
        dispatch({ type: SEARCH_BOOKS, payload: [] });
    }
}
