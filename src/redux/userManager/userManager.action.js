import { ADD_TO_CART } from "./userManager.actionType";

export const addBookToCart = (id) => async(dispatch) => {
    try {
        const responce = await fetch(`${baseUrl}/users/addtocart`,{
            method : "PATCH" , 
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify({id : id}),
        });
        const res = await responce.json();
        dispatch({type : ADD_TO_CART , payload : res.data});
    } catch (error) {
        console.log("error is occured in addBookToCart function" , error);
        dispatch({type :ADD_TO_CART , payload : []});
    }
}