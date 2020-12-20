import React, { useEffect, useRef, useState } from 'react';
import '../../Styles/colorbox.css'
import {CopyToClipboard} from 'react-copy-to-clipboard'

function ColorBox({name,color}) {
    const [isCopied,setIsCopied] = useState(false);
    
    const timer = useRef();
    
    const handelDisplayOverlay=()=>{
        setIsCopied(true);
        timer.current = setTimeout(()=>{
            setIsCopied(false);
        },1500)
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
        <CopyToClipboard text={color} onCopy={handelDisplayOverlay}>
            <div style={{backgroundColor:color}} className="color__box">
                <div style={{backgroundColor:color}} className={`overlay ${isCopied && 'show' }`}/>
                <div className="box__container">
                    <div className="color__name">
                        {name}
                    </div>
                    <div className="see__more">
                        More
                    </div>
                </div>
                <button className = "copy__btn">
                        Copy
                </button>
            </div>
        </CopyToClipboard>
        <div className={`copy__msg ${isCopied && 'show' }`}>
            <h1>copied!</h1>
            <p>{color}</p>
        </div>
        </>
    );
}

export default ColorBox;