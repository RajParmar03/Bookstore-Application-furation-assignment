import { ADD_TO_CART } from "./userManager.actionType";

const initialState = {
    user : {},
}

const userReducer = (state = initialState , action ) => {
    const {type , payload} = action;

    switch(type){
        case ADD_TO_CART : {
            return {...state , user : payload}
        }
        default : {
            return {...state};
        }
    }
}

export default userReducer;