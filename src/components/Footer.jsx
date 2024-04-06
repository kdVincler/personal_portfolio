import '../css/Footer.css';
import emailPic from '../assets/email.svg';
import gitPic from '../assets/github.svg';
import linkedPic from '../assets/linkedin.svg';
import DMemailPic from '../assets/email-dm.svg';
import DMgitPic from '../assets/github-dm.svg';
import DMlinkedPic from '../assets/linkedin-dm.svg';

function Footer ({showing, dark}) {
    if (!showing) return null;
    
    return(
        <div id='contact'>
            <section className='foot'>
                <div className="flexContainer">
                    <a 
                        href='mailto:konrad.vincler@gmail.com'
                        target='_blank'
                    >
                        <img src={dark ? (DMemailPic) : (emailPic)} alt="Email"/>
                        <p style={dark ? ({color: "#ffffff"}) : ({color: "#000000"})}>Email me</p>
                    </a>
                    <a 
                        href='https://github.com/kdVincler'
                        target='_blank'
                    >
                        <img src={dark ? (DMgitPic) : (gitPic)} alt="GitHub" />
                        <p style={dark ? ({color: "#ffffff"}) : ({color: "#000000"})}>My GitHub</p>
                    </a>
                    <a 
                        href='https://www.linkedin.com/in/konrad-dominik-vincler-55753225a/'
                        target='_blank'
                    >
                        <img src={dark ? (DMlinkedPic) : (linkedPic)} alt="LinkedIn"/>
                        <p style={dark ? ({color: "#ffffff"}) : ({color: "#000000"})}>My LinkedIn</p>
                    </a>
                </div>
                <p className='TM' style={dark ? ({color: "#ffffff"}) : ({color: "#000000"})}>
                    © 2024 Konrad Dominik Vincler
                </p>
            </section>
        </div>
    )
}

export default Footer;