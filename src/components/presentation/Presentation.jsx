import { ButtonPrimary } from "../../tools/buttons/ButtonPrimary";
import styles from "./Presentation.module.css";
import appstyle from "../../App.module.css";

export function Presentation () 
{

    return (
        <section className={ styles.container }>

            <div className={ appstyle.box }>
                <h1> <span>public</span> presentation () </h1>
                <p> 
                    <span className={ appstyle.constant }> const </span> name = <span className={ appstyle.string }> 'Franco Morini' </span>; <br />
                </p>
                <p className={ appstyle.comment }>
                    /* <br /><br />
                    Fullstack developer. <br />
                    Fan of innovation and new technologies. <br /><br />
                    */
                </p>
            </div>

            <div className={ appstyle.box }>
                <div className={ styles.profileBox }>
                    <div className={ styles.imgContainer }>
                        <img src="./assets/franco.png" width={225} height={225} alt="Franco Morini" />
                    </div>
                    <span> Franco Morini </span>
                    <ButtonPrimary active={ true } message="full profile" />
                </div>
            </div>

        </section>
    );
}