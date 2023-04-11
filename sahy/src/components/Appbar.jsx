import React from 'react';


import { Button } from '@material-ui/core';
import CottageSharpIcon from '@mui/icons-material/CottageSharp';
const Appbar = () => {
    return (
        <>
        <div className="app_bar row">
            <div className="app_bar__logo">
                <CottageSharpIcon id="icon--home"/>
                <div className="header_logo">Sahy</div>
            </div>
            <div className="app_bar__menu">
                <Button variant="contained">AJOUT</Button>
                {/* <Button variant="contained">RECONNAISSANCE</Button> */}
            </div>
        </div>
        </>
    );
}

export default Appbar;
