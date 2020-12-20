import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { LevelContext } from '../../Context/LevelContextProvider';
import ColorSlider from './ColorSlider';
import SelectFormat from './SelectFormat';

const useStyles = makeStyles(theme=>({
    root:{
        backgroundColor:'white',
        height:'10vh',
        flexDirection:'row',
        alignItems:'center',
        ...theme.textColor,
        position:'unset',

    },
    container:{
        display:'flex',
        alignItems:'center',
        width:'100%',
        margin:'0 30px'
        
    },
    divLevel:{
        marginLeft:'50px',
        height:'100%',
        fontSize:'1.1rem',
        fontWeight:'400',
        display:'flex',
        alignItems:'center',
        marginTop:'2px'
    },
    sliderContainer:{
        flex:'1',
        marginLeft:'30px'
    }
}))

function Navbar(props) {
    const classes = useStyles();
    const {level} = useContext(LevelContext)
    return (
        <AppBar  className={classes.root}>
            <Toolbar disableGutters className={classes.container}>
                <Typography variant="h3">
                    UIColorPicker
                </Typography>
                <Typography component="div"  className={classes.divLevel}>
                        Level-[{level}]
                </Typography>
                <Typography component="div"  className={classes.sliderContainer}>
                    <ColorSlider/>
                </Typography>

                <SelectFormat/>

                
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;