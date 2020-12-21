import { SET_CURRENT_PALETTE, SET_FORMAT, SET_LEVEL } from "./actionType"

export const setLevel = (level)=>{
    return {
        type:SET_LEVEL,
        payload:level
    }
}

export const setFormat = (format)=>{
    return {
        type:SET_FORMAT,
        payload:format
    }
}

export const setCurrentPalette = (palette)=>{

    return {
        type:SET_CURRENT_PALETTE,
        payload:palette
    }
}