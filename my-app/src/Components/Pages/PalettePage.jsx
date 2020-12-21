import React from 'react';
import { useParams } from 'react-router-dom';
import generatePalette from '../../Utils/genereateColorsRange';
import paletteCollection from '../../Utils/seedcolors';
import Footer from '../Layout/Footer';
import Navbar from '../Layout/Navbar';
import Palette from '../Palette/Palette';

function PalettePage(props) {

    const {id} = useParams();
    const currentPalete = paletteCollection.find(palette=> id===palette.id );
    const {paletteName,emoji} = currentPalete
    return (
        <>
            <Navbar />
                <Palette colors={generatePalette(currentPalete).colors}  />
            <Footer  paletteName={paletteName} emoji={emoji}/>
        </>
            
        
    );
}

export default PalettePage;