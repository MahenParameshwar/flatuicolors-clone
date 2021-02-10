import React from 'react';
import DragableColorBox from './DragableColorBox';
import { SortableContainer } from "react-sortable-hoc";
import { withStyles } from '@material-ui/core';

const styles = theme=>({
    root:{
        display:'grid',
        gridTemplateRows:'repeat(4,1fr)',
        gridTemplateColumns: "repeat(5,1fr)",
        height:"100%",
        "@media (max-width: 700px)": {
            
            gridTemplateColumns: "repeat(2,1fr)",
          },
          "@media (max-width: 500px)": {
            height: "100%",
            gridTemplateColumns: "repeat(1,1fr)",
          },
    }
})

const DragableColorList = SortableContainer(({palette,handleDelete,classes})=> {
    
    return (
        <div className={classes.root}>
            {
                palette.map((paletteItem,i)=>{
                    return <DragableColorBox index={i} {...paletteItem} key={paletteItem.name} handleDelete={handleDelete} />
                })
            }
        </div>
    );
})

export default withStyles(styles)(DragableColorList);