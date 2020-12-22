import { AppBar, IconButton, makeStyles, Snackbar, Toolbar, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import ColorSlider from './ColorSlider';
import SelectFormat from './SelectFormat';
import CloseIcon from "@material-ui/icons/Close";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {useStyles} from '../../Styles/navbar'



function Navbar({hideSlider=false}) {
    
    const classes = useStyles();
    
    const level = useSelector(state=>state.level) 
    const [snackBarOpen,setSnackBarOpen] = useState(false)
    
    return (
        <AppBar  className={classes.root}>
            <Toolbar disableGutters className={classes.container}>
                <Typography className={classes.homeLink} variant="h3" component={Link} to="/">
                    UIColorPicker
                </Typography>
                {
                    hideSlider ? <></> :
                    <>
                        <Typography component="div"  className={classes.divLevel}>
                            Level-[{level}]
                        </Typography>
                        <Typography component="div"  className={classes.sliderContainer}>
                            <ColorSlider/>
                        </Typography>
                    </>
                }
                

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