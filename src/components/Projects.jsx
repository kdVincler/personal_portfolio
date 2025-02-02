import '../css/Projects.css';
import RWAT from '../assets/RWA_thumbnail.png'
import FDME from '../assets/FDME_thumbnail.png'
import FLXO from '../assets/FlipXO_thumbnail.png'
import DLVT from '../assets/dlv_thumbnail.png'
import H24 from  '../assets/hobby24_thumbnail.jpg'
import NXSS from '../assets/neXess_thumbnail.png'

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
                <ProjCard
                    time="2024"
                    name="Professional website for Doroti Vincler"
                    image={DLVT}
                    description=" 
                        <a href='https://dorotivincler.com/' target='_blank'>
                            Deployed site
                        </a> <br />
                        <a href='https://github.com/kdVincler/DLV_teaching.git' target='_blank'>
                            GitHub repository
                        </a> <br />
                        A website as a place to advertise the flute playing and teaching of Doroti Vincler, 
                        with a contact form which automatically sends the information inputted to her email address, using the EmailJS library. <br />
                        <i> Using: </i> JavaScript, CSS, JSX with the React framework.
                    "
                />
                <ProjCard
                    time="2025"
                    name="Hobby24"
                    image={H24}
                    description=" 
                        <a href='https://group24-web-apps-ec221017.apps.a.comp-teach.qmul.ac.uk/' target='_blank'>
                            Deployed site (live until May 2025)
                        </a> <br />
                        <a href='https://github.com/kdVincler/webProg_CWGroup' target='_blank'>
                            GitHub repository
                        </a> <br />
                        A social media web application that recommends friends based on users' hobbies.  <br />
                        <i> Using - Frontend: </i> Typescript, TailwindCss (& DaisyUI), Pinia, Vue Router with the Vue framework. <br />
                        <i> Using - Backend: </i> Python, Miniconda, SQLite, Django, Django REST API, Selinium E2E testing
                    "
                />
                <ProjCard
                    time="2025"
                    name="NeXess"
                    image={NXSS}
                    description=" 
                        <b> Project is not deployed </b>
                        <br />
                        <a href='https://github.com/kdVincler/NeXess-frontend' target='_blank'>
                            GitHub repository - Frontend
                        </a> <br />
                        <a href='https://github.com/kdVincler/NeXess_backend' target='_blank'>
                            GitHub repository - Backend
                        </a> <br />
                        My Final Year Project for my BSc Comp. Sci. at QMUL. An android application for NFC-based access control. <br />
                        <i> Using - Frontend: </i> Kotlin, Jetpack Compose UI, Ktor <br />
                        <i> Using - Backend: </i> Python, Miniconda, SQLite, Django
                    "
                />
            </section>
        </div>
        )
}

function ProjCard ({time, name, image, description}) {
    return(
        <section className='card projCard'>
            <img src={image} alt={name + " thumbnail"} />
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