import { ADD_TO_CART, USER_LOGIN } from "./userManager.actionType";

const baseUrl = "http://localhost:8080";

export const loginUser = (userDetails) => async(dispatch) => {
    try {
        const responce = await fetch(`${baseUrl}/users/login` , {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(userDetails)
        });
        const res = await responce.json();
        if(res.isSuccess){
            localStorage.setItem("token" , res.token);
            dispatch({type : USER_LOGIN , payload : res});
            return {isSuccess  : true};
        }else{
            return {isSuccess : false};
        }
    } catch (error) {
        console.log(error);
        dispatch({type : USER_LOGIN , payload : {}});
        return {isSuccess : false};
    }
}

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