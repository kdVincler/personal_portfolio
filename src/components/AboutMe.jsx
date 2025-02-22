import '../css/AboutMe.css';

function AboutMe () {
    return(
        <section className='tile aboutme'>
            <div className='typewriter'>
                <h1>Hello and Welcome!</h1>
            </div>
            <p className='intro'>
                My name is Konrad Dominik Vincler and currently I am 
                a university student in my final year for my Bachelors
                degree in Computer Science. During my first year, <br /> I was able to
                achieve a First class grade of an 88% average module grade.
            </p>
            <p className='intro'>
                Apart from studying, I am striving to improve myself by gaining
                experience through meaningful and impactful experiences.
            </p>
            <p className='intro'>
                A long term aspiration of mine is being able to create web applications
                and pieces of software that have a positive impact on millions of
                people.
            </p>
            <div className='cv'> 
                <a target='_blank' href="CV_portfolio.pdf" className='bn5'>
                    CV
                </a>
            </div>
        </section>
)
}

export default AboutMe;