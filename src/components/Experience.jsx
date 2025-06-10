function Experience () {
    return(
        <div id='exp'>
            <section className='tile exp'>
                <h1 className='font-bold text-3xl underline text-[#FFDD4A]'>
                    Experience
                </h1>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <li>
                        {/* <hr /> this tag is the connecting line, needed for expansion */}
                        <div className="timeline-middle">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="24" 
                                height="24" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="lucide lucide-briefcase-business-icon lucide-briefcase-business"
                            >
                                    <path d="M12 12h.01"/>
                                    <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                                    <path d="M22 13a18.15 18.15 0 0 1-20 0"/>
                                    <rect width="20" height="14" x="2" y="6" rx="2"/>
                            </svg>
                        </div>
                        <div className="timeline-start mb-10 md:text-end">
                            <time className="font-mono italic">September 2023 - June 2025</time>
                            <div className="text-xl font-bold pb-1">Queen Mary University of London</div>
                            <div className="text-lg pb-3">Demonstrator</div>
                            Helped students and marked their work for the following first year modules:
                            Logic and Discrete Structures and Automata and Formal Languages
                        </div>
                        {/* <hr /> this tag is the connecting line, needed for expansion */}
                    </li>
                </ul>
            </section>
        </div>
       
    )
}

export default Experience;