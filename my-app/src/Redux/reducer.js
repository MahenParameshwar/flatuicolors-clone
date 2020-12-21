import { SET_CURRENT_PALETTE, SET_FORMAT, SET_LEVEL } from "./actionType"

const initState = {
    level:500,
    format:'hex',
    palette:[]
}


export const reducer = (state=initState,{type,payload})=>{
    switch (type) {
        case SET_LEVEL:return {
            ...state,
            level:payload
        };
        case SET_FORMAT:return {
            ...state,
            format:payload
        };
        case SET_CURRENT_PALETTE:return {
            ...state,
            palette:payload
        };
        default: return state
    }
}