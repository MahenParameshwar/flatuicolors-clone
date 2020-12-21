import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { setLevel } from '../../Redux/action';

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
    const level = useSelector(state=>state.level);
    const dispatch = useDispatch()
    return (
        <div>
            <PrettoSlider onChange={(e,newValue)=>dispatch(setLevel(newValue))} 
            
            defaultValue={500}
            min={100} max={900} step={100}  
            valueLabelDisplay="auto" 
            aria-label="pretto slider" 
            value={level} />
        </div>
    );
}

export default ColorSlider;