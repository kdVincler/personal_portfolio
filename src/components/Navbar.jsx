function Navbar () {
    return(
        <div className="navbar bg-sky-50 dark:bg-gray-800 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-sky-50 dark:bg-gray-800 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a className="btn btn-ghost hover:bg-transparent hover:text-black dark:hover:text-white text-lg" href="#edu">Education</a></li>
                    <li><a className="btn btn-ghost hover:bg-transparent hover:text-black dark:hover:text-white text-lg" href="#exp">Experience</a></li>
                    <li><a className="btn btn-ghost hover:bg-transparent hover:text-black dark:hover:text-white text-lg" href="#proj">Projects</a></li>
                </ul>
                </div>
                <a className="ml-5 text-4xl lg:flex hidden font-[Kaiti_SC] uppercase font-bold">Konrad Vincler</a>
                <a className="ml-5 text-3xl lg:hidden font-[Kaiti_SC] uppercase font-bold">K D V</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a className="btn btn-ghost hover:bg-transparent hover:text-black dark:hover:text-white  text-lg" href="#edu">Education</a></li>
                    <li><a className="btn btn-ghost hover:bg-transparent hover:text-black dark:hover:text-white  text-lg" href="#exp">Experience</a></li>
                    <li><a className="btn btn-ghost hover:bg-transparent hover:text-black dark:hover:text-white  text-lg" href="#proj">Projects</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline hover:btn-success text-lg" href="#contact">
                    Contact
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-id-card-lanyard-icon lucide-id-card-lanyard"><path d="M13.5 8h-3"/><path d="m15 2-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3"/><path d="M16.899 22A5 5 0 0 0 7.1 22"/><path d="m9 2 3 6"/><circle cx="12" cy="15" r="3"/></svg>
                </a>
            </div>
        </div>
    )
}

export default Navbar;