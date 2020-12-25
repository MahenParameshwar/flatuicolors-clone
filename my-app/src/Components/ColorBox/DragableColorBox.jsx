import { withStyles } from '@material-ui/styles';
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete'
import { SortableElement } from 'react-sortable-hoc';

const styles = {
    root:{
        width: "100%",
        margin: "0 auto",
        position: "relative",
        "&:hover svg":{
            color:'white',
            transform:'scale(1.3)'
        }
    },
    boxContent:{
        width: "100%",
        height: "100%",
        padding:'0px 10px 5px 10px', 
        position: "relative",
        display: "flex",
        color:'rgba(0,0,0,0.5)',
        alignItems: "flex-end",
        justifyContent:"space-between",
        cursor: "pointer",
        textTransform: "uppercase",
        fontSize:"12px",
    },
    deleteIcon:{
        transition:'all 0.3s ease-in-out'
    }
}


const  DragableColorBox = SortableElement(({classes,color,name,handleDelete}) => {

    return (
        <div style={{backgroundColor:color}} className={classes.root}>
            <div className={classes.boxContent}>
                <span>
                    {name}
                </span>
                <DeleteIcon className={classes.deleteIcon} onClick={()=>handleDelete(name)}/>
            </div>
        </div>
    );
})

export default withStyles(styles)(DragableColorBox);