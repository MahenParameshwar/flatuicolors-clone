import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { LevelContext } from '../../Context/LevelContextProvider';

const PrettoSlider = withStyles({
        root: {
            width:'200px',
            marginTop:'7px',
            height: 8,
            color:'#62a845'
        },
        thumb: {
            height: 20,
            width: 20,
            backgroundColor: '#62a845',
            
            marginTop: -6,
            marginLeft: -12,
            '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
            },
        },
        active: {},
        valueLabel: {
            left: 'calc(-50% + 4px)',
            display:'none'
        },
        track: {
            height: 8,
            borderRadius: 4,
            color:'transparent'
        },
        rail: {
            height: 8,
            borderRadius: 4,
            color:'rgba(0,0,0,0.4)',
        
        },
})(Slider);

function ColorSlider(props) {
    const {level,setLevel} = useContext(LevelContext)
    return (
        <div>
            <PrettoSlider onChange={(e,newValue)=>setLevel(newValue)} 
            min={100} max={900} step={100}  
            valueLabelDisplay="auto" 
            aria-label="pretto slider" 
            defaultValue={level} />
        </div>
    );
}

export default ColorSlider;