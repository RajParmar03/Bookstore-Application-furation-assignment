import { ADD_TO_CART, GET_USER, USER_LOGIN } from "./userManager.actionType";

const initialState = {
    user : {},
    token : "",
    usercart : []
}

const userReducer = (state = initialState , action ) => {
    const {type , payload} = action;

    switch(type){
        case USER_LOGIN : {
            return {...state , user : payload.user , token : payload.token , usercart : payload.user.cart};
        }
        case ADD_TO_CART : {
            return {...state , user : payload , cart : payload.cart}
        }
        case GET_USER : {
            return {...state , user : payload , cart : payload.cart};
        }
        default : {
            return {...state};
        }
    }
}

export default userReducer;