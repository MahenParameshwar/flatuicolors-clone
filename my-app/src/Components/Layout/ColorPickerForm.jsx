import React from 'react';
import { SketchPicker,ChromePicker } from 'react-color';
import { Button} from '@material-ui/core';
import {ValidatorForm,TextValidator} from 'react-material-ui-form-validator'




function ColorPickerForm({currentColor,setCurrentColor,colorName,setColorName,paletteIsFull,addNewColor}) {

  
    
    return (
        <>
         <SketchPicker color={currentColor} onChange={(newColor)=>{
                        setCurrentColor(newColor) }} />
          
          <ValidatorForm onSubmit={addNewColor}>
              <TextValidator
              validators={['required','isColorNameUnique','isColorUnique']}
              errorMessages={['this field is required', 'color name already taken', 'color exists in the palette']}
              value={colorName} onChange={(e)=>setColorName(e)}  />
              <Button 
              variant="contained" 
              style={{backgroundColor: !paletteIsFull ? currentColor : 'grey'}} 
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

export default ColorPickerForm;