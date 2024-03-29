import '../css/Experience.css';

function Experience ({showing}) {
    if (!showing) return null;
    
    return(
        <a id='exp'>
            <section className='tile exp'>
                <h1 className='sectionHead'>
                    Experience
                </h1>
                <ExpCArd
                    time="September 2023 - Present"
                    workplace="Queen Mary University of London"
                    position="Demonstrator"
                    comments="Helped students and marked their work for the following first year modules: <br />
                            Logic and Discrete Structures and Automata and Formal Languages"
                />
            </section>
        </a>
       
    )
}

function ExpCArd ({time, workplace, position, comments}) {
    return(
        <section className='card'>
            <p className='one'>{time}</p>
            <h2 className='two'>{workplace}</h2>
            <h3 className='three'>{position}</h3>
            <p className='four' 
                dangerouslySetInnerHTML={{ __html: comments}}></p>
        </section>
    )
    
}

export default Experience;