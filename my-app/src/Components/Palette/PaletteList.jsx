import React from 'react';
import { Link } from 'react-router-dom';

import paletteCollection from '../../Utils/seedcolors'

function PaletteList(props) {
    return (
        <div>
            {
                paletteCollection.map(({paletteName,id})=>{
                    
                    return (
                        <p key={id}>
                            <Link  to= {`palette/${id}`}>
                                {paletteName}
                            </Link>
                        </p>
                            )
                })
            }
        </div>
    );
}

export default PaletteList;