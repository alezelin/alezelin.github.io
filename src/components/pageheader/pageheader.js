import classes from './pageheader.module.css'

const Pageheader = (props) => {
    return ( 
        <div className={classes.Container}>
            <hr />
            <h1>{props.title}</h1>
        </div>
     );
}
 
export default Pageheader;