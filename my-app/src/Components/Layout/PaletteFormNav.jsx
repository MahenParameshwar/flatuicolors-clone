import React, {  useEffect, useState } from 'react';

import clsx from 'clsx';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Button, makeStyles } from '@material-ui/core';
import {ValidatorForm,TextValidator} from 'react-material-ui-form-validator'
import { useHistory } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import PaletteMetaForm from './PaletteMetaForm';



const drawerWidth = 350;
const styles = theme=>(
    {
    root:{
        dispaly:'flex'
    },
    appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
    height:'64px'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
   
  },
  menuButton: {
    marginLeft:12,
    marginRight:10,
  },
  navBtns:{
    marginRight:'1rem'
  },
  buttons:{
    margin:'0 0.5rem'
  }    

})
function PaletteFormNav({classes,open,paletteName,addnewPalette,setPaletteName,handleDrawerOpen,palettes}) {

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
                        className={clsx(classes.menuButton, open && classes.hide)}
                        >
                        <MenuIcon />

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