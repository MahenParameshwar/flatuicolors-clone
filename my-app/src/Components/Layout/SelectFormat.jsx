import React, { useContext } from 'react';
import {MenuItem, Select,} from '@material-ui/core'
import { LevelContext } from '../../Context/LevelContextProvider';
function SelectFormat(props) {

    const {format,setFormat} = useContext(LevelContext)
    
    return (
        <Select value={format} onChange={(e)=>setFormat(prev=>e.target.value)}>
            <MenuItem value='hex'>HEX - #ffffff</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(255,255,255, 1.0)</MenuItem>
        </Select>
    );
}

export default SelectFormat;