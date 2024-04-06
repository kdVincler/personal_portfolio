import '../css/Navbar.css';
import darkPic from '../assets/darkmode.svg';
import lightPic from '../assets/lightmode.svg';

function Navbar ({showing, dark, setDark}) {
    if (!showing) return null;
    
    return(
        <nav>
            <h1 className='almostLogo'><a href=''>Konrad Vincler</a></h1>
            <ul>
                <li><a href="#edu">Education</a></li>
                <li><a href="#exp">Experience</a></li>
                <li><a href="#proj">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                {
                    dark ? (
                        // in dark mode, display the lightmode icon to toggle back
                        <img src={lightPic} alt="lightmode toggle" className='modeToggle' onClick={() => {setDark(!dark)}}/>
                    ) : (
                        // in light mode, display the darkmode icon to toggle back
                        <img src={darkPic} alt="darkmode toggle" className='modeToggle' onClick={() => {setDark(!dark)}}/>
                    )   
                }    
            </ul>
            
        </nav>
    )
}

export default Navbar;