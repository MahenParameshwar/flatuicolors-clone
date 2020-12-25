import React, {  useEffect } from 'react';

import clsx from 'clsx';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Button } from '@material-ui/core';
import {ValidatorForm,TextValidator} from 'react-material-ui-form-validator'
import { useHistory } from 'react-router-dom';



function PaletteFormNav({classes,open,paletteName,addnewPalette,setPaletteName,handleDrawerOpen,palettes}) {

    const history = useHistory();

    useEffect(()=>{
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value)=>{
            return palettes.every(({paletteName})=> paletteName.toLowerCase() !== value.toLowerCase() )
          })
    },[])

    const goToHome = ()=>{
        history.push('/')
    }
    return (
        <>
            <CssBaseline />
                <AppBar
                position="fixed"
                color="default"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
                >
                    <Toolbar>
                        <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                        >
                        <MenuIcon />

                        </IconButton>
                        <Typography variant="h6" noWrap>
                        Persistent drawer
                        </Typography>

                        <ValidatorForm onSubmit={addnewPalette}>
            
                            <TextValidator  validators={['required','isPaletteNameUnique']}
                            errorMessages={['this field is required', 'Palette name already taken']}
                            value={paletteName} onChange={(e)=>setPaletteName(e)}  />
                
                            <Button variant="contained" color="secondary" type="submit">
                                Save Palette
                            </Button>

                        </ValidatorForm>
                        <Button variant="contained" color="primary" onClick={goToHome} >
                            Go Back
                        </Button>
                    </Toolbar>
                </AppBar>  
        </>
    );
}

export default PaletteFormNav;