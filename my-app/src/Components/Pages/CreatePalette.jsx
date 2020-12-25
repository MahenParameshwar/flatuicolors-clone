import React, { Component } from 'react';
import {connect} from 'react-redux'
import {createNewPalette} from '../../Redux/action'
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { arrayMove } from "react-sortable-hoc";
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { SketchPicker,ChromePicker } from 'react-color';
import { Button, ButtonGroup } from '@material-ui/core';
import {ValidatorForm,TextValidator} from 'react-material-ui-form-validator'
import DragableColorList from '../ColorBox/DragableColorList';


const drawerWidth = 300;

const styles = theme => ({
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
});

class CreatePalette extends Component {

    constructor(props){
      super(props)
      this.state = {
        open:false,
        currentColor:'purple',
        palette:[],
        name:"",
        paletteName:"",
      }
    }
   
    handleDrawerOpen = () => {
      this.setState({
        open:true
      })
    };

   handleDrawerClose = () => {
    this.setState({
      open:false
    })
  };


  handleDelete = (name)=>{
    const {palette} = this.state
    const newPalette = palette.filter((color)=>color.name !== name )
    this.setState({
      palette:newPalette
    })
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({palette}) => ({
      palette: arrayMove(palette, oldIndex, newIndex),
      
    }));
  };

  addnewPalette = ()=>{
  
    const {createNewPalette,history} = this.props
    const {paletteName,palette} = this.state
    
    createNewPalette({
      paletteName,
      id: paletteName.toLowerCase().replace(/ /g, "-"),
      emoji: "🇮🇳",
      colors:palette
    })

    history.push('/')
  }


  addNewColor = ()=>{
    const {name,currentColor,palette} = this.state
    this.setState({
      palette:[...palette,{name,color:currentColor}]
    })

  }

  componentDidMount(){

    
    
    ValidatorForm.addValidationRule("isColorNameUnique", value =>{
      return this.state.palette.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    }
      
    );

    ValidatorForm.addValidationRule("isColorUnique", value =>
      this.state.palette.every(({ color }) => color !== this.state.currentColor)
    );

    ValidatorForm.addValidationRule('isPaletteNameUnique', (value)=>{
      return this.props.palettes.every(({paletteName})=> paletteName.toLowerCase() !== value.toLowerCase() )
    })
  
  }

  render(){
    const {classes} = this.props
    const {open,paletteName,palette,name,currentColor} = this.state
   
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
              onClick={this.handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Persistent drawer
            </Typography>
            <ValidatorForm onSubmit={this.addnewPalette}>
  
              <TextValidator  validators={['required','isPaletteNameUnique']}
              errorMessages={['this field is required', 'Palette name already taken']}
              value={paletteName} onChange={(e)=>this.setState({paletteName:e.target.value})}  />
  
              <Button variant="contained" color="secondary" type="submit">
                  Save Palette
              </Button>
            </ValidatorForm>
            
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
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <Typography variant="h4">
              Design your Palette
          </Typography>
          <ButtonGroup>
              <Button variant="contained" color="secondary" >
                  Create Palette
              </Button>
              <Button variant="contained" color="primary">
                  Random Color
              </Button>
          </ButtonGroup>
      
          <SketchPicker color={currentColor} onChange={(newColor)=>{
                                                              this.setState({currentColor:newColor.hex})}} />
          
          <ValidatorForm onSubmit={this.addNewColor}>
              <TextValidator
              validators={['required','isColorNameUnique','isColorUnique']}
              errorMessages={['this field is required', 'color name already taken', 'color exists in the palette']}
              value={name} onChange={(e)=>this.setState({name: e.target.value})}  />
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
  
              <DragableColorList onSortEnd={this.onSortEnd} axis='xy' palette={palette} handleDelete={this.handleDelete} />
          
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state)=> {
  return {
    palettes:state.palettes
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    createNewPalette: (newPalette)=>dispatch(createNewPalette(newPalette))
  }
  
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles, { withTheme: true })(CreatePalette))


