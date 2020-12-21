import React, { useEffect, useRef, useState } from 'react';
import '../../Styles/colorbox.css'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { useHistory } from 'react-router-dom';


function ColorBox({color,format,paletteId,showMore=true}) {

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
            <div style={{backgroundColor:color[format]}} className="color__box">
                <div style={{backgroundColor:color[format]}} className={`overlay ${isCopied && 'show' }`}/>
                <div className="box__container">
                    <div className="color__name">
                        {color.name}
                    </div>
                    {
                        showMore && <div onClick={(e)=>handleClick(e,color.id)} className="see__more">
                                        More
                                    </div>
                    }
                </div>
                <button className = "copy__btn">
                        Copy
                </button>
            </div>
        </CopyToClipboard>
        <div className={`copy__msg ${isCopied && 'show' }`}>
            <h1>copied!</h1>
            <p>{color[format]}</p>
        </div>
        </>
    );
}

export default ColorBox;