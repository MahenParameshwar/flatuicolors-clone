import { withStyles } from '@material-ui/styles';
import React from 'react';
import { Link } from 'react-router-dom';

import paletteCollection from '../../Utils/seedcolors'
import MiniPalette from '../Layout/MiniPalette';

const styles = {
    root:{
        backgroundColor:"blue",
        height:'100%',
        display:'flex',
        alignItems:'flex-start',
        justifyContent:'center'
    },
    container:{
        width:'50%',
        display:'flex',
        alignItems:'flex-start',
        flexDirection:"column",
        flexWrap:'wrap'
    },
    nav:{
        display:'flex',
        width:'100%',
        justifyContent:'space-between'
    },
    palettes:{
        boxSizing:"border-box",
        width:'100%',
        display:'grid',
        gridTemplateColumns:'repeat(3,30%)',
        gridGap:'5%'
    }
}
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
                            <MiniPalette key={index} {...palette} />
                            )
                    })
                }
                </div>
            </div>
        </div>
    );
}

export default withStyles(styles)(Home);