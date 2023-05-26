import { GET_DATA } from "./dataManager.actionType";

const initialState = {
    data : [],
}


const dataReducer = (state = initialState , action) => {
    const {type , payload} = action;
    switch(type){
        case GET_DATA : {
            return {...state , data : payload};
        }
        default : {
            return {...state};
        }
    }
}


export default dataReducer;