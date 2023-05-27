import { ADD_TO_CART, GET_USER, USER_LOGIN } from "./userManager.actionType";

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

export const addBookToCart = (id , token) => async(dispatch) => {
    try {
        const responce = await fetch(`${baseUrl}/users/addtocart`,{
            method : "PATCH" , 
            headers : {
                "Content-Type" : "application/json",
                Authorization: token
            },
            body : JSON.stringify({id : id}),
        });
        const res = await responce.json();
        if(res.isSuccess){
            return true;
        }else{
            return false;
        }
    } catch (error) {
        console.log("error is occured in addBookToCart function" , error);
        return false;
    }
}

export const getUser = (token) => async(dispatch) => {

    try {
        const responce = await fetch(`${baseUrl}/users/getuser` , {
            headers : {
                Authorization : token,
            },
        });
        const res = await responce.json();
        dispatch({type : GET_USER , payload : res.user});
    } catch (error) {
        console.log(error);
    }

}