import React,{useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {ValidatorForm,TextValidator} from 'react-material-ui-form-validator'


export default function PaletteMetaForm({palettes,addnewPalette,paletteName,setPaletteName,setShowingForm}) {
  

 

  const handleClose = () => {
    setShowingForm(false)
  };

 
    
    useEffect(()=>{
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value)=>{
            return palettes.every(({paletteName})=> paletteName.toLowerCase() !== value.toLowerCase() )
          })
    },[])

    

  return (
    <div>
     
      <Dialog open={true}  onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create a new Palette</DialogTitle>
        <ValidatorForm onSubmit={addnewPalette}>
        <DialogContent>
          <DialogContentText>
            Please enter a plaette name and make sure it is unique
          </DialogContentText>
          
                
                <TextValidator fullWidth margin="normal"  validators={['required','isPaletteNameUnique']}
                errorMessages={['this field is required', 'Palette name already taken']}
                value={paletteName} label='Palette Name' onChange={(e)=>setPaletteName(e)}  />
               

          
            
           
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button variant="contained" color="secondary" type="submit">
                    Save Palette
          </Button>
        </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
}