import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import ColorBox from '../ColorBox/ColorBox';
import '../../Styles/palette.css'
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';

function SinglePalettePage(props) {
    const [{colors , id} , format] = useSelector(state=>[state.palette,state.format])
    const {colorId} = useParams();
    const shades = [];
    const history = useHistory();
    for(let level  in colors){
        if(level === '50')
            continue;
    
        for(let color of colors[level]){
            if(color.id === colorId){
                shades.push(color);
                break
            }
                
        }
    }
    const colorBox = shades.map((color,index) => <ColorBox key={index} color={color} paletteId={id} format={format} showMore={false}  />)
    return (
        <>
        <Navbar hideSlider={true}/>
            <div className='palette__colors'>
                {colorBox}
                <div style={{backgroundColor:'black'}} className="color__box" >
                    <button className = "back__btn" onClick={()=>history.push(`/palette/${id}`)}>
                            go back
                    </button>
                </div>
            </div>
        <Footer />
        </>
        
    );
}

export default SinglePalettePage;