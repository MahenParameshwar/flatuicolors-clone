import { withStyles } from '@material-ui/styles';
import React from 'react';
import {styles} from '../../Styles/miniPalette'
import {Delete} from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux';
import {  updatePalette } from '../../Redux/action';
function MiniPalette(props) {
    const {classes,paletteName,emoji,id,colors} = props;
    const palettes = useSelector(state=>state.palettes)
    console.log(palettes)
    const dispatch = useDispatch()
    const handleDelete = (e,id)=>{
        e.stopPropagation();
        const newPalettes = palettes.filter(palette=>palette.id !== id)
        dispatch(updatePalette(newPalettes))
       
        
    }
    return (
        <div className={classes.root}>
          
            <Delete onClick={(e)=>handleDelete(e,id)} className={classes.deleteIcon}/>
            
           
            <div className={classes.colors}>
                {
                    colors.map(color=> <div
                        key = {color.name}
                        className={classes.miniColor}
                        style={{backgroundColor:color.color}}
                        >

                        </div>)
                }
            </div>
            <div className={classes.title}>
                <h5>
                    {paletteName}
                </h5>
                <div>
                    {emoji}
                </div>
            </div>
                
        </div>
    );
}



export default withStyles(styles)(MiniPalette);