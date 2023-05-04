import { applyMiddleware, combineReducers, createStore } from "redux";

import thunk from "redux-thunk";
import favoriteReducer from "../pages/HomePage/BlogPost/redux/favoriteReducer";

const store = createStore(combineReducers({
    ids: favoriteReducer
}), applyMiddleware(thunk)) 

export default store;