import '../css/Navbar.css';

function Navbar () {
    return(
        <nav>
            <h1 className='almostLogo'><a href=''>Konrad Vincler</a></h1>
            <ul>
                <li><a href="#">Education</a></li>
                <li><a href="#">Experience</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;