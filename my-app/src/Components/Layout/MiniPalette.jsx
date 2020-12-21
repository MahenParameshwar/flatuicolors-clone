import { withStyles } from '@material-ui/styles';
import React from 'react';

const styles = {
    root:{
        backgroundColor:'white',
        borderRadius:'5px',
        padding:'0.5rem',
        position:'relative',
        overfolow:'hidden',
        border:'1px solid black',
        '&:hover':{
            cursor:'pointer'
        }
    },
    colors:{
        backgroundColor:'grey',
        height:'150px',
        width:'100%'
    },
    title:{
        display:'flex',
        justifyContent:"space-between",
        alignItems:'center',
        margin:'0',
        color:'black',
        paddingTop:'0.5rem',
        fontSize:'1rem',
        position:'relative'
    },
    emoji:{
        marginLeft:'0.5rem',
        fontSize:'1.5rem'
    },
    miniColor:{
        height:'25%',
        width:'20%',
        display:'inline-block',
        margin:'0 auto',
        position:'relative',
        marginBottom:'-3.5px'
    }

}

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
                <h5 >
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