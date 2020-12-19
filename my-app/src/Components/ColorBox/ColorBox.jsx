import React from 'react';
import '../../Styles/colorbox.css'

function ColorBox({name,color}) {

    return (
        <div style={{backgroundColor:color}} className="color__box">
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
    );
}

export default ColorBox;