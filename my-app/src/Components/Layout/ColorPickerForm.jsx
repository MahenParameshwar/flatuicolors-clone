import React from 'react';
import { SketchPicker,ChromePicker } from 'react-color';
import { Button} from '@material-ui/core';
import {ValidatorForm,TextValidator} from 'react-material-ui-form-validator'
import { withStyles } from '@material-ui/styles';


const styles = theme=>({
    picker:{
        width:'60% !important',
        marginTop:'2rem'
    }
})


function ColorPickerForm({classes,currentColor,setCurrentColor,colorName,setColorName,paletteIsFull,addNewColor}) {

    return (
        <>
         <SketchPicker className={classes.picker} color={currentColor} onChange={(newColor)=>{
                        setCurrentColor(newColor) }} />
          
          <ValidatorForm onSubmit={addNewColor}>
              <TextValidator
              validators={['required','isColorNameUnique','isColorUnique']}
             
              placeholder="Color Name"
              style={{marginTop:'20px'}}
              errorMessages={['this field is required', 'color name already taken', 'color exists in the palette']}
              value={colorName} onChange={(e)=>setColorName(e)}  />
              <Button 
              variant="contained" 
              style={{backgroundColor: !paletteIsFull ? currentColor : 'grey' , marginTop:'10px',width:"100%",height:'60px'}} 
              type="submit"
           
              disabled={paletteIsFull}
              >
                {
                  !paletteIsFull ? "ADD COLOR" : 'PALETTE IS FULL'
                }
                  
              </Button>
          </ValidatorForm>
        
        </>
    );
}

export default withStyles(styles)(ColorPickerForm);