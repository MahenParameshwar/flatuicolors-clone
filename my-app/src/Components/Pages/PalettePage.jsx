import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setCurrentPalette } from '../../Redux/action';
import generatePalette from '../../Utils/genereateColorsRange';
import Footer from '../Layout/Footer';
import Navbar from '../Layout/Navbar';
import Palette from '../Palette/Palette';

function PalettePage(props) {

    const {id} = useParams();
    const dispatch = useDispatch()
    const palettes = useSelector(state => state.palettes)
    
    const currentPalette = palettes.find(palette=> id===palette.id );
    
    useEffect(()=>{
        dispatch(setCurrentPalette(generatePalette(currentPalette)))
    },[])
    
    
    return (
        <>
            <Navbar /> 
                <Palette/>
            <Footer/> 
            
        </>
            
        
    );
}

export default PalettePage;