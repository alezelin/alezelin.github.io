import classes from './contact.module.css'
import Pageheader from '../pageheader/pageheader';
import githubmark from './../../img/githubmark.png';
import linkedin from './../../img/linkedin.png';
import mail from './../../img/mail.svg';

const Contact = () => {
    return ( 
        <div className={classes.Container} id="contact">
            <Pageheader title={"Contact & liens utiles"}/>
            <div className={classes.DSProjects}>Vous pouvez retrouver tous mes projets de Data Science <br /> sur mon repo en cliquant <a className={classes.Button} href="https://github.com/alezelin/Data-Science-Portfolio">ici !</a></div>
            <a className={classes.Linkbutton} href="https://github.com/alezelin"><img className={classes.Img} src={githubmark} alt="githubmark"></img></a>
            <a className={classes.Linkbutton} href="https://www.linkedin.com/in/al-ezelin/"><img className={classes.Img} src={linkedin} alt="linkedin"></img></a>
            <a className={classes.Linkbutton} href="mailto:annelaure.ezelin@gmail.com"><img className={classes.Img} src={mail} alt="mail"></img></a>
        </div>
     );
}
 
export default Contact;