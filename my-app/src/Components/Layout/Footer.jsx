import React from 'react';
import '../../Styles/footer.css'
function Footer({paletteName,emoji}) {
    
    return (
        <footer>
            <div>{paletteName}-{emoji}</div>
        </footer>
    );
}

export default Footer;