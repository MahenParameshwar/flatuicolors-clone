import React from 'react';
import { useSelector } from 'react-redux';
import '../../Styles/footer.css'
function Footer() {
    const {paletteName,emoji} = useSelector(state=>state.palette)
    return (
        <footer>
            <div>{paletteName}-{emoji}</div>
        </footer>
    );
}

export default Footer;