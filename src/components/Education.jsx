function Education () {
    // should include an 
    //    EDUCATION section
    // and a 
    //    CERTIFICATES section
    
    return(
        <div id='edu'>
            <section className='tile education bg-sky-50 dark:bg-gray-800'>
                <h1 className='font-bold text-3xl underline text-sky-600'>
                    Education
                </h1>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <li>
                        {/* <hr className="bg-black dark:bg-white"/> this tag is the connecting line, needed for expansion */}
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
                                className="lucide lucide-school-icon lucide-school"
                            >
                                    <path d="M14 22v-4a2 2 0 1 0-4 0v4"/>
                                    <path d="m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10"/>
                                    <path d="M18 5v17"/>
                                    <path d="m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6"/>
                                    <path d="M6 5v17"/>
                                    <circle cx="12" cy="9" r="2"/>
                            </svg>
                        </div>
                        <div className="timeline-start mb-10 md:text-end">
                            <time className="font-mono italic">2022 - 2025</time>
                            <div className="text-xl font-bold pb-1">Queen Mary University of London</div>
                            <div className="text-lg pb-3">BSc (Hons) Computer Science</div>
                            1st year - 88% <br /> 
                            2nd year - 83% <br />
                            3rd year - (N/A) <br />
                            On track to recieve a First class degree
                        </div>
                        <hr className="bg-black dark:bg-white"/>
                    </li>
                    <li>
                        <hr className="bg-black dark:bg-white"/>
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
                                className="lucide lucide-school-icon lucide-school"
                            >
                                    <path d="M14 22v-4a2 2 0 1 0-4 0v4"/>
                                    <path d="m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10"/>
                                    <path d="M18 5v17"/>
                                    <path d="m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6"/>
                                    <path d="M6 5v17"/>
                                    <circle cx="12" cy="9" r="2"/>
                            </svg>
                        </div>
                        <div className="timeline-end md:mb-10">
                            <time className="font-mono italic">2018 - 2022</time>
                            <div className="text-xl font-bold pb-1">Fazekas Mihaly Secondary Grammar School Budapest</div>
                            <div className="text-lg pb-3">GCSE's</div>
                            5 A grades in:
                            Mathematics (A - 98%), English Language (A - 93%), Computer Science (A - 96%),
                            History (A - 88%) and Hungarian Language (A - 91%)
                        </div>
                        {/* <hr className="bg-black dark:bg-white"/> this tag is the connecting line, needed for expansion */}
                    </li>
                </ul>
                <h1 className='mt-[3vh] font-bold text-3xl underline text-sky-600'>
                    Certificates
                </h1>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <li>
                        {/* <hr className="bg-black dark:bg-white"/> this tag is the connecting line, needed for expansion */}
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
                                className="lucide lucide-shield-check-icon lucide-shield-check"
                            >
                                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
                                <path d="m9 12 2 2 4-4"/>
                            </svg>
                        </div>
                        <div className="timeline-start mb-10 md:text-end">
                            <time className="font-mono italic">June - September 2023</time>
                            <div className="text-xl font-bold pb-1">Harvard University</div>
                            <div className="text-lg pb-3">CS50 (online)</div>
                            Introduction to Computer Science online course
                        </div>
                        <hr className="bg-black dark:bg-white"/>
                    </li>
                    <li>
                        <hr className="bg-black dark:bg-white"/>
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
                                className="lucide lucide-shield-check-icon lucide-shield-check"
                            >
                                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
                                <path d="m9 12 2 2 4-4"/>
                            </svg>
                        </div>
                        <div className="timeline-end md:mb-10">
                            <time className="font-mono italic">July 2022</time>
                            <div className="text-xl font-bold pb-1">Cambridge Assessment English</div>
                            <div className="text-lg pb-3">Certificate in Advanced English</div>
                            Pass with an A grade and an overall score of 201. CEFR level: C2
                        </div>
                        {/* <hr className="bg-black dark:bg-white"/> this tag is the connecting line, needed for expansion */}
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Education;
