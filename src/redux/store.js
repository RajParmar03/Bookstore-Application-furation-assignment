import { legacy_createStore, combineReducers , applyMiddleware , compose ,  } from "redux";
import dataReducer from "./dataManager/dataManager.reducer";
import thunk from "redux-thunk";
import userReducer from "./userManager/userManager.reducer";


const rootReducer = combineReducers({
    dataManager : dataReducer,
    userManager : userReducer,
});

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(rootReducer , composer(applyMiddleware(thunk)));

export default store;