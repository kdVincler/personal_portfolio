function Experience() {
    return (
        <div id='exp'>
            <section className='tile exp bg-sky-50 dark:bg-gray-800'>
                <h1 className='font-bold text-3xl underline text-sky-600'>
                    Experience
                </h1>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    {/* 
                        Usage: 
                            - for items you want on the left side of the timeline, the div after the svg should have the className:
                                "timeline-start mb-10 md:text-end"
                            - for items you want on the right side of the timeline, the div after the svg should have the className:
                                "timeline-end md:mb-10"
                            - new items on the timeline need the whole <li> block
                            - connecting lines are created with the <hr/> tags at BOTH the start and end of each <li> block
                    */}
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
                                className="lucide lucide-briefcase-business-icon lucide-briefcase-business"
                            >
                                <path d="M12 12h.01" />
                                <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                                <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                                <rect width="20" height="14" x="2" y="6" rx="2" />
                            </svg>
                        </div>
                        <div className="timeline-start mb-10 md:text-end">
                            <time className="font-mono italic">December 2025 - Present</time>
                            <div className="text-xl font-bold pb-1">Efficura Solutions Ltd</div>
                            <div className="text-lg pb-3">Full-Stack Software Engineer</div>
                            <ul className="flex flex-col gap-2">
                                <li>Delivered a full-stack acquisition platform with dashboards, deal/asset pipelines, fund workflows, and an AI-driven intake system.</li>
                                <li>Led architecture and execution across system design, client communication, JIRA planning, and team coordination.</li>
                                <li>Built core platform infrastructure including a Microsoft Graph email client, shared workspace components, and a full testing suite.</li>
                                <li>Drove major performance gains through prefetching, parallelised auth, and backend throughput optimisation.</li>
                            </ul>
                        </div>
                        <hr className="bg-black dark:bg-white" />
                    </li>
                    <li>
                        <hr className="bg-black dark:bg-white" />
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
                                <path d="M12 12h.01" />
                                <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                                <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                                <rect width="20" height="14" x="2" y="6" rx="2" />
                            </svg>
                        </div>
                        <div className="timeline-end md:mb-10">
                            <time className="font-mono italic">September 2023 - June 2025</time>
                            <div className="text-xl font-bold pb-1">Queen Mary University of London</div>
                            <div className="text-lg pb-3">Demonstrator</div>
                            Worked for the following modules:
                            Logic and Discrete Structures and Automata and Formal Languages
                        </div>
                        {/* <hr className="bg-black dark:bg-white"/> this tag is the connecting line, needed for expansion */}
                    </li>
                </ul>
            </section>
        </div>

    )
}

export default Experience;