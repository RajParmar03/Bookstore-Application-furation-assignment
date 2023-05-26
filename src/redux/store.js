import { legacy_createStore, combineReducers , applyMiddleware , compose ,  } from "redux";
import dataReducer from "./dataManager/dataManager.reducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    dataManager : dataReducer,
});

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(rootReducer , composer(applyMiddleware(thunk)));

export default store;