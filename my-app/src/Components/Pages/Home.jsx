import { withStyles } from '@material-ui/styles';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {styles} from '../../Styles/home'
import paletteCollection from '../../Utils/seedcolors'
import MiniPalette from '../Layout/MiniPalette';


function Home(props) {
    const {classes} = props
    const palettes = useSelector(state=>state.palettes)
    const history = useHistory()
    useEffect(()=>{
        window.localStorage.setItem("palettes",
        JSON.stringify(palettes))    
    },[palettes])

    return (
        <div className={classes.root}>
            <nav className={classes.nav}>
                    <h1>React Colors</h1>
                    <Link to="/palette/createPalette" style={{color:"white"}} >Create Palette</Link>
                </nav>
            <div className={classes.container}>
                
                <div className={classes.palettes}>
                {
                    palettes.map((palette,index)=>{
                        
                        return (
                            <div  key={index} onClick={()=>history.push(`palette/${palette.id}`)}>
                                <MiniPalette {...palette} />
                            </div>
                            )
                    })
                }
                </div>
            </div>
        </div>
    );
}

export default withStyles(styles)(Home);