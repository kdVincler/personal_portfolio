import '../css/Projects.css';
import RWAT from '../assets/RWA_thumbnail.png'

function Projects ({showing}) {
    if (!showing) return null;
    
    return(
        <div id='proj'>
            <section className='tile proj'>
                <h1 className='sectionHead'>
                    Projects
                </h1>
                <ProjCard
                    time="2024"
                    name="React Weather App"
                    image={RWAT}
                    description=" 
                        <a href='https://weather-gui.netlify.app' target='_blank'>
                            Deployed site
                        </a> <br />
                        <a href='https://github.com/kdVincler/weather-app' target='_blank'>
                            GitHub repositories
                        </a> <br />
                        A weather app made in React for outdoor enthusiasts
                    "
                />
            </section>
        </div>
        )
}

function ProjCard ({time, name, image, description}) {
    return(
        <section className='card projCard'>
            <img src={image} alt={name + " homescreen"} />
            <div className='projText'>
                <p className='one'>{time}</p>
                <h2 className='two'>{name}</h2>
                <p className='four projLinks' 
                    dangerouslySetInnerHTML={{ __html: description}}></p>
            </div>
        </section>
    )
}

export default Projects;