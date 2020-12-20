import { AppBar, IconButton, makeStyles, Snackbar, Toolbar, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { LevelContext } from '../../Context/LevelContextProvider';
import ColorSlider from './ColorSlider';
import SelectFormat from './SelectFormat';
import CloseIcon from "@material-ui/icons/Close";
import { Link } from 'react-router-dom';


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
    },
    homeLink:{
        textDecoration: 'none',
        color:'black'
    }
}))

function Navbar(props) {
    const classes = useStyles();
    const {level} = useContext(LevelContext)
    const [snackBarOpen,setSnackBarOpen] = useState(false)
    
    return (
        <AppBar  className={classes.root}>
            <Toolbar disableGutters className={classes.container}>
                <Typography className={classes.homeLink} variant="h3" component={Link} to="/">
                    UIColorPicker
                </Typography>
                <Typography component="div"  className={classes.divLevel}>
                        Level-[{level}]
                </Typography>
                <Typography component="div"  className={classes.sliderContainer}>
                    <ColorSlider/>
                </Typography>

                <SelectFormat setSnackBarOpen={setSnackBarOpen}/>

                <Snackbar
                anchorOrigin={{vertical:'bottom',horizontal:'left'}}
                open={snackBarOpen}
                autoHideDuration={3000}
                message={<span className="format__id">Format Changed</span>}
                ContentProps={{
                    'aria-describedby':'message-id'
                }}
                onClose={()=>setSnackBarOpen(false)}
                action={[
                    <IconButton
                    onClick={()=>{setSnackBarOpen(false)}}
                    color="inherit"
                    key="close"
                    aria-label="close">
                        <CloseIcon/>
                    </IconButton>
                ]}
                />
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;