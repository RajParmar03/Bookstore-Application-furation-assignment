import { GET_DATA } from "./dataManager.actionType";

const baseUrl = "http://localhost:8080";

export const getData = () => async(dispatch) => {
    try {
        const responce = await fetch(`${baseUrl}/books`);
        const res = await responce.json();
        dispatch({type : GET_DATA , payload : res.data});
    } catch (error) {
        console.log("error is occured in getData function" , error);
        dispatch({type :GET_DATA , payload : []});
    }
}