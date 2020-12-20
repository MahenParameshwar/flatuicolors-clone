import React from 'react';
import palletteCollection from '../../Utils/seedcolors'
import Palette from '../Palette/Palette';
import generatePalette from '../../Utils/genereateColorsRange';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';



function Home(props) {
    const {paletteName,emoji} = palletteCollection[3];
    return (
        <>
            <Navbar/>
            <Palette colors={generatePalette(palletteCollection[3]).colors}/>
            <Footer paletteName = {paletteName} emoji={emoji} />
        </>
    );
}

export default Home;