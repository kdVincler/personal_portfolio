import '../css/AboutMe.css';

function AboutMe ({showing}) {
    if (!showing) return null;
    
    return(
        <section className='tile aboutme'>
            <div className='typewriter'>
                <h1>Hello and Welcome!</h1>
            </div>
            <p className='intro'>
                My name is Konrad Dominik Vincler and currently I am 
                a university student in my penultimate year for my Bachelors
                degree in Computer Science. During my first year, <br /> I was able to
                achieve a First class grade of an 89% average module grade.
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
        </section>
)
}

export default AboutMe;