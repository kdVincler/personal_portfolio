import '../css/Footer.css';
import emailPic from '../assets/email.svg';
import gitPic from '../assets/github.svg';
import linkedPic from '../assets/linkedin.svg';
import DMemailPic from '../assets/email-dm.svg';
import DMgitPic from '../assets/github-dm.svg';
import DMlinkedPic from '../assets/linkedin-dm.svg';

function Footer ({dark}) {
    return(
        <div id='contact'>
            <section className='foot'>
                <div className="flexContainer">
                    <a 
                        href='mailto:konrad.vincler@gmail.com'
                        target='_blank'
                    >
                        <img src={DMemailPic} alt="Email"/>
                        <p>Email me</p>
                    </a>
                    <a 
                        href='https://github.com/kdVincler'
                        target='_blank'
                    >
                        <img src={DMgitPic} alt="GitHub" />
                        <p>My GitHub</p>
                    </a>
                    <a 
                        href='https://www.linkedin.com/in/konrad-dominik-vincler-55753225a/'
                        target='_blank'
                    >
                        <img src={DMlinkedPic} alt="LinkedIn"/>
                        <p>My LinkedIn</p>
                    </a>
                </div>
                <p className='TM'>
                    Copyright © {new Date().getFullYear()} - Konrad Vincler
                </p>
            </section>
        </div>
    )
}

export default Footer;