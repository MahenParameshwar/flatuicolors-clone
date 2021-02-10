import React,{useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {ValidatorForm,TextValidator} from 'react-material-ui-form-validator'
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

export default function PaletteMetaForm({palettes,addnewPalette,paletteName,setPaletteName,setShowingForm}) {
  
  const [currentDialog,setCurrentDialog] = useState('paletteForm');
  
  const handleClose = () => {
    setShowingForm(false)
  };
  
    useEffect(()=>{
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value)=>{
            return palettes.every(({paletteName})=> paletteName.toLowerCase() !== value.toLowerCase() )
          })
    },[])
  
  const savePalette = (emoji)=>{
    console.log(emoji)
    addnewPalette({
      emoji:emoji.native
    })
  } 
    
  return (
    <div>
      <Dialog open={currentDialog==='emojiPicker'} onClose={handleClose}>
      <DialogTitle id="form-dialog-title">Choose a palette emoji</DialogTitle>
        <Picker onSelect={savePalette} title='Pick a palette emoji' />
      </Dialog>
      <Dialog open={currentDialog === 'paletteForm'}  onClose={handleClose} aria-labelledby="form-dialog-title">
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
          <Button disabled={paletteName === ''} variant="contained" color="secondary" onClick={()=>setCurrentDialog('emojiPicker')}>
                    Save Palette
          </Button>
        </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
}