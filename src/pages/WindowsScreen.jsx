import NavBar from '../components/NavBar.jsx';
import DesktopIcons from '../components/DesktopIcons';
import '../styles/components/windows.sass';

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