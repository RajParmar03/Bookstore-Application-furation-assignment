import { GET_BOOKS , GET_SINGLE_BOOK } from "./dataManager.actionType";

const baseUrl = "http://localhost:8080";

export const getBooks = () => async(dispatch) => {
    try {
        const responce = await fetch(`${baseUrl}/books`);
        const res = await responce.json();
        dispatch({type : GET_BOOKS , payload : res.data});
    } catch (error) {
        console.log("error is occured in getData function" , error);
        dispatch({type :GET_BOOKS , payload : []});
    }
}

export const getSingleBook = (id) => async(dispatch) => {
    try {
        const responce = await fetch(`${baseUrl}/books/book/${id}`);
        const res = await responce.json();
        dispatch({type : GET_SINGLE_BOOK , payload : res.data});
    } catch (error) {
        console.log("error is occured in getSingleData function" , error);
        dispatch({type :GET_SINGLE_BOOK , payload : []});
    }
}

