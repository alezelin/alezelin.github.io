import classes from './projets.module.css'
import Pageheader from '../pageheader/pageheader'
import mobile_dev from '../../img/mobile_dev.svg'
import appointmentmanager from '../../img/appointmentmanager.png'
import kilti from '../../img/kilti.png'

const Projets = () => {
    return ( 
        <div className={classes.Container} id='projets'>
            <Pageheader title={' Mes projets en développement mobile'}/>
            <div className={classes.Card}>
                <img className={classes.AppManager} src={kilti} alt="kilti"></img>
                <div className={classes.TextCard}>
                    <h2>Quiz App</h2>
                    <p> Application de quiz pour promouvoir la culture guadeloupéenne sous plusieurs formes. 
                        <br/>À terme, il y aura plusieurs thèmes tels que l'écriture, la compréhension du créole guadeloupéen et la connaissance des expressions idiomatiques. <br/>
                    </p>
                    <div className={classes.Button}>
                        <a href="">En savoir plus [WIP]</a>
                    </div>
                </div>
                
            </div>

            <div className={classes.Card}>
                <img className={classes.AppManager} src={appointmentmanager} alt="appointmentmanager"></img>
                <div className={classes.TextCard}>
                    <h2>Appointment Manager</h2>
                    <p>Application de prise de rendez-vous et de consultation pour une esthéticienne et praticienne de massage. 
                        Le but est de répertorier les différents rendez-vous, pouvoir sélectionner les prestations souhaitées, 
                        ajouter un commentaire et d'indiquer s'il s'agit d'un nouveau client ou non. Il est possible de 
                        modifier un rendez-vous ou de le supprimer.</p> 
                        <div className={classes.Button}>
                        <a href="">En savoir plus [WIP]</a>
                    </div>
                </div>
            </div>

            <img className={classes.mobile_dev} src={mobile_dev} alt="mobile_dev"></img>
        </div>
     );
}
 
export default Projets;