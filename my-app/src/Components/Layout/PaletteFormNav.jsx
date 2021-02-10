import React, {  useEffect, useState } from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import classNames from "classnames";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {styles} from '../../Styles/PaletteFormNavStyles'
import { Button} from '@material-ui/core';
import {ValidatorForm} from 'react-material-ui-form-validator'
import { useHistory } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import PaletteMetaForm from './PaletteMetaForm';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';

function PaletteFormNav({classes,open,paletteName,addnewPalette,setPaletteName,handleDrawerOpen,palettes}) {
    console.log(open)
    const history = useHistory();
    const [showingForm,setShowingForm] = useState(false)
    useEffect(()=>{
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value)=>{
            return palettes.every(({paletteName})=> paletteName.toLowerCase() !== value.toLowerCase() )
          })
    },[])

    const goToHome = ()=>{
        history.push('/')
    }
    return (
        <div className={classes.root}>
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
                        
                        className={classNames(classes.menuButton, {[classes.hide]:open})}
                        >
                        < AddToPhotosIcon  />

                        </IconButton>
                        <Typography variant="h6" noWrap>
                            Create a Palette
                        </Typography>
                    </Toolbar>
                    <div className={classes.navBtns}>
                           <Button className={classes.buttons} variant="contained" color="secondary" onClick={goToHome} >
                            Go Back
                            </Button>
                            <Button variant="contained" className={classes.buttons} color="primary" onClick ={()=>setShowingForm(true)} >
                              Save
                            </Button>
                        </div>
                </AppBar>
                {
                  showingForm &&
                <PaletteMetaForm
                          setShowingForm = {setShowingForm} 
                          setPaletteName={setPaletteName}
                          paletteName={paletteName}
                          addnewPalette={addnewPalette}
                          palettes={palettes}/> 
                } 
        </div>
    );
}


export default withStyles(styles)(PaletteFormNav);