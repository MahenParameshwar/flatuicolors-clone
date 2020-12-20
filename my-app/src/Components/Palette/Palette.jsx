import React from 'react';
import ColorBox from '../ColorBox/ColorBox';
import '../../Styles/palette.css'

function Palette({colors}) {
    return (
        
            <div className="palette__colors">
                {colors[500].map((color)=><ColorBox key={color.name} {...color} />)}
            </div>
    
    );
}

export default Palette;