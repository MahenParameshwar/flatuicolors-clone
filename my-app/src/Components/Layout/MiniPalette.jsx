import { withStyles } from '@material-ui/styles';
import React from 'react';
import {styles} from '../../Styles/miniPalette'

function MiniPalette(props) {
    const {classes,paletteName,emoji,colors} = props;
    
    return (
        <div className={classes.root}>
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