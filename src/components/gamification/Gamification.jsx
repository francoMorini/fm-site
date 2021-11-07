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
                <div>
                    <div>
                        <div className={ styles.imgBox }>
                            <img src="./assets/key.png" alt="Mistery Key" />
                        </div>
                        <ButtonPrimary message="buy" />
                    </div>
                    <div>
                        <div>
                            <p> Mistery Key </p>
                            <p> 50 <span> coins </span> </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}