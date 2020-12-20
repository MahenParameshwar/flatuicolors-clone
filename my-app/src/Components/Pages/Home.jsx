import React from 'react';
import palletteCollection from '../../Utils/seedcolors'
import Palette from '../Palette/Palette';
import generatePalette from '../../Utils/genereateColorsRange';
import Navbar from '../Layout/Navbar';


function Home(props) {
    
    return (
        <>
            <Navbar/>
            <Palette colors={generatePalette(palletteCollection[4]).colors}/>
            
        </>
    );
}

export default Home;