import { ButtonPrimary } from "../../tools/buttons/ButtonPrimary";
import styles from "./Projects.module.css";
import appstyle from "../../App.module.css";

export function Projects () 
{
    return (
        <section className={ styles.container }>
            <div className={ appstyle.box }>
                <h1> <span> public </span> myProjects () </h1>
                <p className={ appstyle.comment }> // this.getCoins(); </p>
                <p>
                    <span className={ appstyle.constant }> const </span> description = <span className={ appstyle.string }> 'My recent projects totally publics' </span>; <br />
                </p>
                <div>
                    <img />
                    <h3> NightChat </h3>
                    <ButtonPrimary message="open box" />
                </div>
                <div>
                    <img />
                    <h3> sFinance </h3>
                    <ButtonPrimary message="open box" />
                </div>
            </div>
            <div className={ appstyle.box }>
                <img />
                <div> free </div>
            </div>
        </section>
    );
}