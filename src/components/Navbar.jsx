import '../css/Navbar.css';

function Navbar ({showing}) {
    if (!showing) return null;
    
    return(
        <nav>
            <h1 className='almostLogo'><a href=''>Konrad Vincler</a></h1>
            <ul>
                <li><a href="#edu">Education</a></li>
                <li><a href="#exp">Experience</a></li>
                <li><a href="#proj">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;