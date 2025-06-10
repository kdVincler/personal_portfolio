function AboutMe () {
    return(
        <section className='tile aboutme'>
             <div className=''> {/* typewriter */}
                <h1 className="text-center pt-2 pb-2 text-2xl text-[#FFDD4A] font-bold">
                    Hello and Welcome!
                </h1>
            </div>
            <p className='pb-2 text-center lg:text-justify font-bold text-lg'>
                My name is Konrad Dominik Vincler and currently I am 
                a university student in my final year for my Bachelors
                degree in Computer Science.
            </p>
            <p className='pb-2 text-center lg:text-justify font-bold text-lg'>
                Apart from studying, I am striving to improve myself by gaining
                experience through meaningful and impactful experiences.
            </p>
            <p className='pb-2 text-center lg:text-justify font-bold text-lg'>
                A long term aspiration of mine is being able to create web applications
                and pieces of software that have a positive impact on millions of
                people.
            </p>
            <div className='flex justify-center mt-[2vh] mb-[1vh]'> 
                <a className="btn btn-outline hover:btn-success text-lg" target='_blank' href="CV_portfolio.pdf">
                    CV
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download-icon lucide-download"><path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/></svg>
                </a>
            </div>
        </section>
)
}

export default AboutMe;