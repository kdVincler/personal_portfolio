import '../css/Projects.css';
import RWAT from '../assets/RWA_thumbnail.png'
import FDME from '../assets/FDME_thumbnail.png'
import FLXO from '../assets/FlipXO_thumbnail.png'

function Projects () {
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
                            GitHub repository
                        </a> <br />
                        A weather app made in React for outdoor enthusiasts <br />
                        <i> Using: </i> JavaScript, HTML, CSS, JSX and the React framework
                    "
                />
                <ProjCard
                    time="2024"
                    name="FDM Expenses App"
                    image={FDME}
                    description=" 
                        <b> Project is not deployed </b>
                        <br />
                        <a href='https://github.com/kdVincler/fdm-expenses-app-client.git' target='_blank'>
                            GitHub repository - Client side
                        </a> <br />
                        <a href='https://github.com/kdVincler/fdm-expenses-app-server.git' target='_blank'>
                            GitHub repository - Server side
                        </a> <br />
                        An application to submit and approve business expense claims for FDM. <br />
                        <i> Using - Client side: </i> JavaScript, HTML, CSS, JSX and the React framework <br />
                        <i> Using - Server side: </i> Python, Flask and PostgreSQL
                    "
                />
                <ProjCard
                    time="2024"
                    name="FlipXO"
                    image={FLXO}
                    description=" 
                        <a href='https://snack.expo.dev/@kdvincler/flipxo---snack-version' target='_blank'>
                            'Deployed' version on Expo Snack 
                        </a> <br /> 
                        (Scan the QR code to download Expo Go and run the app on your device) <br /> 
                        <a href='https://github.com/kdVincler/FlipXO.git' target='_blank'>
                            GitHub repository
                        </a> <br />
                        My very first React Native project, a tic-tac-toe game on IOS/Android accommodating 2 players per device. <br />
                        <i> Using: </i> JavaScript in the React Native framework using Expo
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