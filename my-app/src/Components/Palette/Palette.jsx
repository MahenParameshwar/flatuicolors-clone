import React, { useContext } from 'react';
import ColorBox from '../ColorBox/ColorBox';
import '../../Styles/palette.css'
import { LevelContext } from '../../Context/LevelContextProvider';



function Palette({colors}) {
    const {level,format} = useContext(LevelContext);

    return (

            <div className="palette__colors">
                {colors[level].map((color)=><ColorBox key={color.name} color={color} format={format} />)}
            </div>
    
    
    );
}

export default Palette;