import { ButtonPrimary } from "../../tools/buttons/ButtonPrimary";
import styles from "./Presentation.module.css";

export function Presentation () 
{

    const imageName = '{ name }';

    return (
        <section className={ styles.container }>

            <div>
                <h1> <span> public </span> presentation () </h1>
                <p> 
                    <span id="constant"> const </span> name = <span id="string"> 'Franco Morini' </span>; <br></br>
                </p>
                <p className={ styles.comment }>
                    /* <br></br><br></br>
                    Fullstack developer. <br></br>
                    Fan of innovation and new technologies. <br></br><br></br>
                    */
                </p>
            </div>

            <div>
                <img src="./assets/francomorini.png" width={300} height={300} alt="Franco Morini"></img>
                <span> { imageName } </span>
                <ButtonPrimary message="full profile" />
            </div>

        </section>
    );
}