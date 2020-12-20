import React, { useContext } from 'react';
import {MenuItem, Select,} from '@material-ui/core'
import { LevelContext } from '../../Context/LevelContextProvider';
function SelectFormat({setSnackBarOpen}) {

    const {format,setFormat} = useContext(LevelContext)
    const handleChange = (e)=>{
        setFormat(e.target.value)
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