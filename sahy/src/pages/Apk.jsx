import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import CottageSharpIcon from '@mui/icons-material/CottageSharp';
import Home from './Home';
import Recognition from './Recognition';
import Add from './Add';
import { Link } from 'react-router-dom';
const Apk = () => {
    const [active, setActive] = useState(true);
    const handleClick = () => {
        setActive(!active)
    }
    return (
        <>
        <div className="container_app">
            <div className="app_bar row">
                <div className="app_bar__logo">
                    <CottageSharpIcon id="icon--home"/>
                    <Link className="link" to='/'>
                        <div className="header_logo">Sahy</div>
                    </Link>
                </div>
                <div className="app_bar__menu">
                    {
                        active ? (
                            <><Button variant="contained" onClick={handleClick}>AJOUT</Button></>
                        ) : (
                            <><Button variant="contained" onClick={handleClick}>RECONNAISSANCE</Button></>
                        )
                    }
                </div>
            </div>
            <div className="main_app">
                {
                    active ? (
                        <>
                            <Recognition />
                        </>
                        ) : (
                        <>
                            <Add />
                        </>
                        )
                    }
            </div>
        </div>
        </>
    );
}

export default Apk;
