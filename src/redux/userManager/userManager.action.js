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

export const addBookToCart = (book , token) => async(dispatch) => {
    try {
        const responce = await fetch(`${baseUrl}/users/addtocart`,{
            method : "PATCH" , 
            headers : {
                "Content-Type" : "application/json",
                Authorization: token
            },
            body : JSON.stringify(book),
        });
        const res = await responce.json();
        if(res.isSuccess){
            return {isSuccess:true , msg : res.msg};
        }else{
            return {isSuccess:false , msg : res.msg};
        }
    } catch (error) {
        console.log("error is occured in addBookToCart function" , error);
        return {isSuccess : false , msg : "failed to add to cart."};
    }
}

export const removeBookFromCart = (book , token) => async(dispatch) => {
    try {
        const responce = await fetch(`${baseUrl}/users/removefromcart`,{
            method : "PATCH" , 
            headers : {
                "Content-Type" : "application/json",
                Authorization: token
            },
            body : JSON.stringify(book),
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

export const clearCart = (token) => async(dispatch) => {
    try {
        const responce = await fetch(`${baseUrl}/users/clearcart`,{
            method : "PATCH" , 
            headers : {
                "Content-Type" : "application/json",
                Authorization: token
            },
            body : JSON.stringify({}),
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

