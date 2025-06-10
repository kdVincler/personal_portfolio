function Navbar () {
    return(
        <div className="navbar bg-[#3C6997] shadow-sm text-white">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-[#3C6997] rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a className="btn btn-ghost hover:bg-transparent hover:text-white text-lg" href="#edu">Education</a></li>
                    <li><a className="btn btn-ghost hover:bg-transparent hover:text-white text-lg" href="#exp">Experience</a></li>
                    <li><a className="btn btn-ghost hover:bg-transparent hover:text-white text-lg" href="#proj">Projects</a></li>
                </ul>
                </div>
                <a className="ml-5 text-4xl lg:flex hidden font-[Kaiti_SC] uppercase font-bold">Konrad Vincler</a>
                <a className="ml-5 text-3xl lg:hidden font-[Kaiti_SC] uppercase font-bold">K D V</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a className="btn btn-ghost hover:bg-transparent hover:text-white text-lg" href="#edu">Education</a></li>
                    <li><a className="btn btn-ghost hover:bg-transparent hover:text-white text-lg" href="#exp">Experience</a></li>
                    <li><a className="btn btn-ghost hover:bg-transparent hover:text-white text-lg" href="#proj">Projects</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline hover:btn-success text-lg" href="#contact">
                    Contact
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link-icon lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                </a>
            </div>
        </div>
    )
}

export default Navbar;