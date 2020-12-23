import { withStyles } from '@material-ui/styles';
import React from 'react';

const styles = {
    root:{
        width: "100%",
        margin: "0 auto",
        position: "relative",
        display: "flex",
        alignItems: "flex-end",
        cursor: "pointer",
    }
}


function DragableColorBox({classes,color,name}) {

    return (
        <div style={{backgroundColor:color}} className={classes.root}>
            {name}
        </div>
    );
}

export default withStyles(styles)(DragableColorBox);