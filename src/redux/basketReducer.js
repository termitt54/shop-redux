import { createAction, createReducer } from "@reduxjs/toolkit"


const state = {
    basket: []
}

export const addToBasket = createAction("ADD_TO_BASKET")
export const removeFromBasket = createAction("REMOVE_FROM_BASKET")
export const plusCount = createAction("PLUS")
export const minusCount = createAction("MINUS")

export default createReducer(state, {
    [addToBasket]: (state, action) => {
        state.basket.push(action.payload)
    },
    [removeFromBasket]: (state, action) => {
        state.basket = state.basket.filter(item => item.id !== action.payload.id 
            || item.guarant !== action.payload.guarant
            || item.color !== action.payload.color
            || item.memory !== action.payload.memory)
    },
    [plusCount]: (state, action) => {
        const item = state.basket.find(item => item.id === action.payload.id 
            && item.guarant === action.payload.guarant
            && item.color === action.payload.color
            && item.memory === action.payload.memory) 

        if(!item) {
            return
        }
        item.count += 1
        item.totalPrice = item.price * item.count
    },
    [minusCount]: (state, action) => {
        const item = state.basket.find(item => item.id === action.payload.id 
            && item.guarant === action.payload.guarant
            && item.color === action.payload.color
            && item.memory === action.payload.memory) 

        if(!item) {
            return
        }
        item.count -= 1
        item.totalPrice = item.price * item.count
    }
})