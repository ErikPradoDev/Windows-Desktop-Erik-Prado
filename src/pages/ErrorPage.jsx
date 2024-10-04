import React from 'react';
import { Link } from 'react-router-dom';
import IconLock from '../img/house-lock.png';
import IconWindows from '../img/icon-windows.png';


import '../styles/components/errorPage.sass';

export default function ErrorPage(){
    return(
        <div id='errorPageSize'>
            <p id='sad'> :&#40;</p>
            <p className='pTxt'>
            The link to this site had a problem and needs to be turned to the lock screen or windows screen. 
            Below select the option you want while we were collecting some information about this error.
            <br />
            </p>

            <p className='pTxt mrgn'>
                20% complete </p>

            <div id='linksSize'>
                <Link to="/"> 
                <div className='cardIcon'>
                    <div className='cardIconContainer'>
                        <img src={IconLock} width='80px' height='80px'></img>
                    </div>
                    <p className='txtAlign'> Lock Screen </p>
                </div>
                </Link>

                <Link to="/windows"> 
                <div className='cardIcon'>
                    <div className='cardIconContainer'>
                    <img src={IconWindows} width='80px' height='80px'></img>
                    </div>
                    <p className='txtAlign'> Windows Screen </p>
                </div>
                </Link>
            </div>
        </div>

    )
}