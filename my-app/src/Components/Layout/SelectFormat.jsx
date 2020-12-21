import React, { useContext } from 'react';
import {MenuItem, Select,} from '@material-ui/core'
import { setFormat } from '../../Redux/action';
import { useDispatch, useSelector } from 'react-redux';

function SelectFormat({setSnackBarOpen}) {

    const format = useSelector(state=>state.format)

    const dispatch = useDispatch();
    
    const handleChange = (e)=>{
        dispatch(setFormat(e.target.value))
        setSnackBarOpen(true)
    }
    return (
        <Select value={format} onChange={handleChange}>
            <MenuItem value='hex'>HEX - #ffffff</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(255,255,255, 1.0)</MenuItem>
        </Select>
    );
}

export default SelectFormat;