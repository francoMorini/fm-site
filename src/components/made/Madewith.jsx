import { ButtonPrimary } from "../../tools/buttons/ButtonPrimary";
import styles from './Madewith.module.css';
import appstyle from "../../App.module.css";

export function Madewith () 
{

    return (
        
        <section className={ styles.container }>

            <div className={ appstyle.box }>
                <h1> How i made <span>this()</span> </h1>
                <p className={ appstyle.comment }>
                    /* <br /><br />
                    It took me 32h, like 20 cup of coffee and <br />
                    some chill electro and random pop <br /><br />
                    */
                </p>
                {/* Escribirlo con variables */}
                <p></p>
            </div>

            <div className={ appstyle.box }>
                <img />
                <ButtonPrimary message="this.getCoins()" />
            </div>

        </section>

    );

}