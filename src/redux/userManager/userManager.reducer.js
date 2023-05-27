import { ADD_TO_CART, USER_LOGIN } from "./userManager.actionType";

const initialState = {
    user : {},
    token : ""
}

const userReducer = (state = initialState , action ) => {
    const {type , payload} = action;

    switch(type){
        case USER_LOGIN : {
            return {...state , user : payload.user , token : payload.token};
        }
        case ADD_TO_CART : {
            return {...state , user : payload}
        }
        default : {
            return {...state};
        }
    }
}

export default userReducer;