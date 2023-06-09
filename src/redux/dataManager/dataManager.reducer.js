import { FILTER_BOOKS, GET_BOOKS, GET_SINGLE_BOOK, SEARCH_BOOKS } from "./dataManager.actionType";

const initialState = {
    data : [],
}


const dataReducer = (state = initialState , action) => {
    const {type , payload} = action;
    switch(type){
        case GET_BOOKS : {
            return {...state , data : payload};
        }
        case GET_SINGLE_BOOK : {
            return {...state , data : payload};
        }
        case FILTER_BOOKS : {
            return {...state , data : payload};
        }
        case SEARCH_BOOKS : {
            return {...state , data : payload};
        }
        default : {
            return {...state};
        }
    }
}


export default dataReducer;