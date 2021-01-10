import React, { Component } from 'react';
import {connect} from 'react-redux'
import {createNewPalette} from '../../Redux/action'
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { arrayMove } from "react-sortable-hoc";
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Button, ButtonGroup } from '@material-ui/core';
import {ValidatorForm} from 'react-material-ui-form-validator'
import DragableColorList from '../ColorBox/DragableColorList';
import PaletteFormNav from '../Layout/PaletteFormNav';
import ColorPickerForm from '../Layout/ColorPickerForm';


const drawerWidth = 350;

const styles = theme => ({
  root: {
    display: 'flex',
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
    dispaly:'flex',
    alignIntems:'center',
    justifyContent:'center'
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
  container:{
    display:'flex',
    flexDirection:'column',
    width:'90%',
    alignItems:'center',
    justifyContent:'center',
    height:'100%'
  },
  buttons:{

  }
});

class CreatePalette extends Component {

    static defaultProps = {
      maxColor:20
    }

    constructor(props){
      super(props)
      this.state = {
        open:false,
        currentColor:'purple',
        palette:props.palettes[0].colors,
        colorName:"",
        paletteName:"",
      }
    }
   
    handleDrawerOpen = () => {
      this.setState({
        open:true
      })
    };

    setPaletteName = (e)=>{
      this.setState({
        paletteName:e.target.value
      })
    }

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

  addnewPalette = ({emoji})=>{
    const {createNewPalette,history} = this.props
    const {paletteName,palette} = this.state
    console.log(emoji)
    createNewPalette({
      paletteName,
      id: paletteName.toLowerCase().replace(/ /g, "-"),
      emoji,
      colors:palette
    })

    history.push('/')
  }


  addNewColor = ()=>{
    const {colorName,currentColor,palette} = this.state
    this.setState({
      palette:[...palette,{name:colorName,color:currentColor}]
    })

  }

  setCurrentColor = (color)=>{
  this.setState({
    currentColor:color.hex
  })
}

  setColorName = (e)=>{
    this.setState({
      colorName:e.target.value
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
  
  }

  clearPalette = ()=>{
    this.setState({palette:[]})
  }

  addRandomColor = ()=>{
    const {palettes} = this.props;
    const allPaletteColors = palettes.map(({colors})=>colors).flat()
    const randomColor = allPaletteColors[Math.floor(Math.random() * allPaletteColors.length) ]
    this.setState({
      palette:[...this.state.palette,randomColor]
    })
  }


  render(){
    const {classes,maxColor,palettes} = this.props
    const {open,paletteName,palette,colorName,currentColor} = this.state
    const paletteIsFull = palette.length >= maxColor

    return (
      <div className={classes.root}>
        <PaletteFormNav
       
        paletteName={paletteName} 
        open={open}
        handleDrawerOpen={this.handleDrawerOpen} 
        addnewPalette={this.addnewPalette} 
        setPaletteName={this.setPaletteName}
        palettes={palettes}
        />
        
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
          <div className={classes.container} >
            <Typography variant="h4">
                Design your Palette
            </Typography>
                    <div className={classes.buttons}>
                       
                            <Button variant="contained" color="secondary" onClick={this.clearPalette} >
                                Clear Palette
                            </Button>
                            <Button disabled={paletteIsFull} variant="contained" color="primary" onClick={this.addRandomColor}>
                                Random Color
                            </Button>
                       
                    </div>
                <ColorPickerForm currentColor={currentColor} 
                setCurrentColor={this.setCurrentColor} 
                colorName = {colorName}
                setColorName = {this.setColorName}
                paletteIsFull={paletteIsFull}
                addNewColor={this.addNewColor}
                palette={palette}
                />
            </div>
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


