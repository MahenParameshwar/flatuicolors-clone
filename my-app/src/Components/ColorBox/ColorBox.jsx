import React, { useEffect, useRef, useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { useHistory } from 'react-router-dom';
import {styles} from '../../Styles/colorBox';
import { withStyles } from '@material-ui/styles';
import classNames from "classnames";


function ColorBox({color,format,paletteId,classes,showMore=true}) {

    const [isCopied,setIsCopied] = useState(false);
    const history = useHistory();
    const timer = useRef();
    
    const handleClick = (e,id)=>{
        e.stopPropagation();
        history.push(`/palette/${paletteId}/${id}`)
    }
    const handelDisplayOverlay=()=>{
        
        timer.current = setTimeout(()=>{
            setIsCopied(false);
        },1500)
        setIsCopied(true);
    }

    /*Handels display of overlay */
    useEffect(()=>{
    
    return ()=>{
        if(isCopied){
            clearInterval(timer.current);
        }
    }
    },[isCopied])



    return (
        <>
        <CopyToClipboard text={color[format]} onCopy={handelDisplayOverlay}>
            <div  className={classes.colorBox}>
                <div style={{backgroundColor:color[format]}} className={ classNames(classes.copyOverlay , { [classes.showOverlay] : isCopied})} />
                <div className={classes.boxContainer}>
                    <div className={classes.colorName}>
                        {color.name}
                    </div>
                    {
                        showMore && <div onClick={(e)=>handleClick(e,color.id)} className={classes.seeMore}>
                                        More
                                    </div>
                    }
                </div>
                <button className = {classes.copyButton}>
                    
                        Copy
                    
                </button>
            </div>
        </CopyToClipboard>
        <div className={classNames(classes.copyMsg , { [ classes.showMsg ] : isCopied})}>
            <h1 className={classes.copiedText}>copied!</h1>
            <p className={classes.copyText}>{color[format]}</p>
        </div>
        </>
    );
}

export default withStyles(styles)(React.memo(ColorBox,(prevProps,nextProps)=>{
    if(prevProps.paletteId === nextProps.paletteId){
        return true
    }
    return false
}))