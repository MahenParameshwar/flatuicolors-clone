import { withStyles } from '@material-ui/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import {styles} from '../../Styles/footer.js'

function Footer(props) {
    const {paletteName,emoji} = useSelector(state=>state.palette)
    const {classes} = props
    return (
        <footer className={classes.footer}>
            <div style={{marginRight:"30px"}}>{paletteName}-{emoji}</div>
        </footer>
    );
}

export default withStyles(styles)(Footer);