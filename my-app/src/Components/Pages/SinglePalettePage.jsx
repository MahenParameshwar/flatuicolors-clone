import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import ColorBox from '../ColorBox/ColorBox';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import { withStyles } from '@material-ui/styles';
import {styles} from '../../Styles/singlePalette'




function SinglePalettePage(props) {
    const [{colors , id} , format] = useSelector(state=>[state.palette,state.format])
    const {colorId} = useParams();
    const {classes} = props;
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
            <div className={classes.paletteColors}>
                {colorBox}
                <div className={classes.colorBox} onClick={()=>history.push(`/palette/${id}`)} >
                    <button className = {classes.backBtn} >
                            go back
                    </button>
                </div>
            </div>
        <Footer />
        </>
        
    );
}

export default withStyles(styles)(SinglePalettePage);