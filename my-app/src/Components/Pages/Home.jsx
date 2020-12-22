import { withStyles } from '@material-ui/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import {styles} from '../../Styles/home'
import paletteCollection from '../../Utils/seedcolors'
import MiniPalette from '../Layout/MiniPalette';


function Home(props) {
    const {classes} = props
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1>React Colors</h1>
                </nav>
                <div className={classes.palettes}>
                {
                    paletteCollection.map((palette,index)=>{
                        
                        return (
                            <Link  key={index} to= {`palette/${palette.id}`}>
                                <MiniPalette {...palette} />
                            </Link>
                            )
                    })
                }
                </div>
            </div>
        </div>
    );
}

export default withStyles(styles)(Home);