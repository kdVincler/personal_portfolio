import headshot from '../assets/headshot.jpg'
function AboutMe () {
    return(
        <section className='tile aboutme bg-sky-50 dark:bg-gray-800 
                        flex lg:flex-row-reverse flex-col gap-4 items-center 
        '>
            <div  className='tooltip lg:w-[45%] w-[90%]'>
                <div className='tooltip-content'>
                    Photo taken by IOA Photography (Instagram: @ioaphotography)
                </div>
                <img 
                    src={headshot} 
                    alt="Professional headshot of Konrad Vincler taken by IOA Photography (Insta.: @ioaphotography)" 
                    className='mask mask-squircle w-[100%]'
                />
            </div>
            <div>
                <div className="flex items-center justify-center gap-2">
                    <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="25px" height="25px" />
                    <h1 className="text-center pt-2 pb-2 text-2xl text-sky-600 font-bold">
                        Hello and Welcome!
                    </h1>
                    <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="25px" height="25px" />
                </div>
                <p className='pb-2 text-center lg:text-justify font-bold text-lg'>
                    My name is Konrad Dominik Vincler and I am recent graduate of Queen Mary University of London, 
                    where I received a First Class Bachelor's degree in Computer Science.
                </p>
                <p className='pb-2 text-center lg:text-justify font-bold text-lg'>
                    Currently, I am striving to improve myself by gaining
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
            </div>
            
        </section>
)
}

export default AboutMe;