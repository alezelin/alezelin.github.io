import classes from "./accueil.module.css"
import programmer from "../../img/programmer.png"

const Accueil = () => {
    return ( 
        <div className={classes.Accueil}>
            <div className={classes.Container}>
                <h1 className={classes.Hello}>HELLO !</h1>
                <h1 className={classes.Jesuis}>Je suis</h1>
                <div className={classes.Scroller}>
                    <span>
                        Anne-Laure . <br />
                        Data Scientist .<br />
                        Développeuse mobile & web en reconversion .
                    </span>
                </div>
            </div>
            <img className={classes.Programmer} src={programmer} alt="programmer"></img>
        </div>
     );
}
 
export default Accueil;