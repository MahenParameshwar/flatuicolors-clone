import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { SketchPicker,ChromePicker } from 'react-color';
import { Button, ButtonGroup } from '@material-ui/core';
import DragableColorBox from '../ColorBox/DragableColorBox';
import {ValidatorForm,TextValidator} from 'react-material-ui-form-validator'


const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
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
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    width:'calc(100vw-300px)',
    marginTop:'64px',
    height:'calc(100vh - 64px)',
    display:'grid',
    gridTemplateRows:'repeat(5,1fr)',
    gridTemplateColumns: "repeat(5,1fr)",
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function CreatePalette() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [currentColor,setCurrentColor] = useState('purple');
    const [palette,setPalette] = useState([]);
    const [name,setName] = useState("");

    const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addNewColor = ()=>{
      setPalette(prev=>[...palette,{name,color:currentColor}])
      
  }

  useEffect(()=>{
    ValidatorForm.addValidationRule('isNameUnique', (value) => {
    
        return palette.every( ({name}) => name.toLowerCase() !== value.toLowerCase())
        
    })

    ValidatorForm.addValidationRule('isColorUnique', (value) => {
         return palette.every(({color}) =>  color !== currentColor)
    });

  })

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
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
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <Typography variant="h4">
            Design your Palette
        </Typography>
        <ButtonGroup>
            <Button variant="contained" color="secondary">
                Create Palette
            </Button>
            <Button variant="contained" color="primary">
                Random Color
            </Button>
        </ButtonGroup>
    
        <SketchPicker color={currentColor} onChange={(newColor)=>{
                                                            setCurrentColor(newColor.hex)}} />
        
        <ValidatorForm onSubmit={addNewColor}>
            <TextValidator
            validators={['required','isNameUnique','isColorUnique']}
            errorMessages={['this field is required', 'color name must be unique', 'color must be unique']}
            value={name} onChange={(e)=>setName(e.target.value)}  />
            <Button 
            variant="contained" 
            style={{backgroundColor:currentColor}} 
            type="submit"
            >
                ADD COLOR
            </Button>
        </ValidatorForm>
        
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {/* <div className={classes.drawerHeader} /> */}
           
            {
        
                palette.map((paletteItem,index)=>{
                    return <DragableColorBox {...paletteItem} key={paletteItem.name}>
                                
                            </DragableColorBox>
                })
            }
           
        
      </main>
    </div>
  );
}

