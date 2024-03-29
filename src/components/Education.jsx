import '../css/Education.css';

function Education ({showing}) {
    // should include an 
    //    EDUCATION section
    // and a 
    //    CERTIFICATES section
    if (!showing) return null;
    
    return(
        <a id='edu'>
            <section className='tile education'>
                <h1 className='sectionHead edu'>
                    Education
                </h1>
                <EduCard
                    time="2022 - Present"
                    school="Queen Mary University of London"
                    degree="BSc (Hons) Computer Science"
                    comments="1st year - 88% <br /> 
                                2nd year - (N/A) <br />
                                3rd year - (N/A)"
                />
                <EduCard
                    time="2018 - 2022"
                    school="Fazekas Mihaly Secondary Grammar School Budapest"
                    degree="GCSE's"
                    comments="5 A grades in: <br />
                     Mathematics (A - 98%), English Language (A - 93%), Computer Science (A - 96%), <br />
                     History (A - 88%) and Hungarian Language (A - 91%)"
                />
                <h1 className='sectionHead certs'>
                    Certificates
                </h1>
                <EduCard
                    time="June 2023 - September 2023"
                    school="Harvard University"
                    degree="CS50 (online)"
                    comments=""
                />
                <EduCard
                    time="July 2022"
                    school="Cambridge Assessment English"
                    degree="Certificate in Advanced English"
                    comments="Pass with an A grade and an overall score of 201. <br />
                                CEFR level: C2"
                />  
            </section>
        </a>
    )
}

function EduCard ({time, school, degree, comments}) {
    return(
        <section className='card'>
            <p className='one'>{time}</p>
            <h2 className='two'>{school}</h2>
            <h3 className='three'>{degree}</h3>
            <p className='four' 
                dangerouslySetInnerHTML={{ __html: comments}}></p>
        </section>
    )
    
}

export default Education;