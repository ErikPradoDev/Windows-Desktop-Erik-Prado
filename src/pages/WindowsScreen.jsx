import React from 'react';
import NavBar from '../components/Navbar';
import DesktopIcons from '../components/DesktopIcons';


import '../styles/components/windows.sass';
import '../styles/components/windows.css';

export default function TwoPage(){
    return(
        <>
        <div id="windowsMaxContainer" className="wallpaperDark"> 
            <div id="desktopContainer">
                <DesktopIcons />
            </div>
            <div id="taskbarContainer">
                <NavBar />
            </div>
        </div> 
        </>
    )
}