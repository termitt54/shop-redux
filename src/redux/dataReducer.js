import { createReducer } from "@reduxjs/toolkit";
import { telephone } from "../data/telephone";
import { computer } from "../data/computer";

const initialState = {
    telephones: telephone,
    computers: computer
}

export default createReducer(initialState, {

})