import { combineReducers, configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basketReducer";
import dataReducer from "./dataReducer";

const rootReducer = combineReducers( { 
    data: dataReducer,
    basket: basketReducer,
})

export const store = configureStore({
    reducer: rootReducer
})