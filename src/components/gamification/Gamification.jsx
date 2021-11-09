import { ButtonPrimary } from "../../tools/buttons/ButtonPrimary";
import styles from "./Gamification.module.css";
import appstyle from "../../App.module.css";

export function Gamification () 
{

    return (
        <section className={ styles.container }>
            <div className={ appstyle.box }>
                <h1> Explore my site to <span className={ styles.getcoins }>getCoins()</span> </h1>
                <p className={ appstyle.comment }>
                    /* <br /><br />
                    Here you can see a mistery key <br />
                    Get it by collecting coins (click on the functions) <br />
                    and you can access to the secret room <br /><br />
                    */
                </p>
                <p>
                I think that gamification in its proper measure <br />
                improves the <span className={ appstyle.constant }>user experience</span>.
                </p>
            </div>
            <div className={ appstyle.box }>
                <div className={ styles.keyBox }>
                    <div className={ styles.imgBox }>
                        <img src="./assets/keys.png" alt="Mistery Key" />
                        <div className={ styles.buyPill }> buy </div>
                    </div>
                    <div>
                        <p className={ styles.keyName }> Mistery Key </p>
                        <p className={ styles.price }> 50 <span> coins </span> </p>
                    </div>
                </div>
            </div>
        </section>
    );

}