import '../css/Footer.css';
import emailPic from '../assets/email.svg';
import gitPic from '../assets/github.svg';
import linkedPic from '../assets/linkedin.svg';

function Footer ({showing}) {
    if (!showing) return null;
    
    return(
        <div id='contact'>
            <section className='foot'>
                <div className="flexContainer">
                    <a 
                        href='mailto:konrad.vincler@gmail.com'
                        target='_blank'
                    >
                        <img src={emailPic} alt="Email" />
                        <p>Email me</p>
                    </a>
                    <a 
                        href='https://github.com/kdVincler'
                        target='_blank'
                    >
                        <img src={gitPic} alt="GitHub" />
                        <p>My GitHub</p>
                    </a>
                    <a 
                        href='https://www.linkedin.com/in/konrad-dominik-vincler-55753225a/'
                        target='_blank'
                    >
                        <img src={linkedPic} alt="LinkedIn" />
                        <p>My LinkedIn</p>
                    </a>
                </div>
                <p className='TM'>
                    © 2024 Konrad Dominik Vincler
                </p>
            </section>
        </div>
    )
}

export default Footer;