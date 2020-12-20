import React from 'react';
import palletteCollection from '../../Utils/seedcolors'
import Palette from '../Palette/Palette';
import generatePalette from '../../Utils/genereateColorsRange';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import PaletteList from '../Palette/PaletteList';



function Home(props) {
    
    return (
        <>
        <div>
            <PaletteList />
        </div>
            {/* <Navbar/>
            <Palette colors={generatePalette(palletteCollection[3]).colors}/>
            <Footer paletteName = {paletteName} emoji={emoji} /> */}
        </>
    );
}

export default Home;