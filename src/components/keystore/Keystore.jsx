import appstyle from "../../App.module.css";
import styles from './Keystore.module.css';
import { Card } from "../../tools/cards/Card";

export function Keystore () 
{
    return (
        <section className={ styles.container }>
            <div className={ appstyle.box }>
                <h1> <span>Thanks</span> for checking my website </h1>
                <p className={ appstyle.comment }> { '//' } Have you collected the coins? </p>
                <div>
                    <Card buttonTxt='purchase' />
                </div>
            </div>
        </section>
    );
}