import classes from './navbar.module.css'

const Navbar = () => {
    return ( 
        <div className={classes.Navbar}>
            <nav>
                <ul>
                    <li>
                        <a href="/">Accueil</a>
                    </li>
                    <li>
                        <a href="/#projets">Projets</a>
                    </li>
                    
                    <li>
                        <a href="/#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Navbar;