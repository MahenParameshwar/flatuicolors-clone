import React, {  useEffect } from 'react';

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

  }    

})
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
                          <PaletteMetaForm 
                          setPaletteName={setPaletteName}
                          paletteName={paletteName}
                          addnewPalette={addnewPalette}
                          palettes={palettes}/>
                           <Button variant="contained" color="primary" onClick={goToHome} >
                Go Back
                         </Button>
                        </div>
                </AppBar>  
        </div>
    );
}


export default withStyles(styles)(PaletteFormNav);