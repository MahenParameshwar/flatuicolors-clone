import React from 'react';
import ColorBox from '../ColorBox/ColorBox';


import { useSelector } from 'react-redux';
import { withStyles } from '@material-ui/styles';

const styles = {
    paletteColors:{
                height: "85vh",
                width: "100vw",
                display: "grid",
                gridTemplateColumns: "repeat(5,1fr)",
                gridTemplateRows: "repeat(4,1fr)"
}
}

function Palette(props) {
    const [palette,level,format] = useSelector(state=>[state.palette,state.level,state.format]);
    console.log(format)
    const {classes} = props
    return (
            palette.colors ?
                <div className={classes.paletteColors}>
                    {palette.colors[level].map((color)=><ColorBox  key={color.name} color={color} format={format} paletteId={palette.id} />)}
                </div>
            : <></>
    
    );
}

export default withStyles(styles)(Palette);