import React from 'react';
import ColorBox from '../ColorBox/ColorBox';
import '../../Styles/palette.css'

import { useSelector } from 'react-redux';



function Palette() {
    const [palette,level,format] = useSelector(state=>[state.palette,state.level,state.format]);
    return (
            palette.colors ?
                <div className="palette__colors">
                    {palette.colors[level].map((color)=><ColorBox  key={color.name} color={color} format={format} paletteId={palette.id} />)}
                </div>
            : <></>
    
    );
}

export default Palette;