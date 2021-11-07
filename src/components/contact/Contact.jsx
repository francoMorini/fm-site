import { ButtonPrimary } from "../../tools/buttons/ButtonPrimary";
import appstyle from "../../App.module.css";
import styles from './Contact.module.css';
import { Card } from "../../tools/cards/Card";

export function Contact () 
{

    return (

        <section className={ styles.container }>
            <div className={ appstyle.box }>
                <h1> <span>public</span> contact () </h1>
                <p className={ appstyle.comment }> // Be free to choose how to contact me </p>
                <div>
                    <p> { '>' } sendEmail() </p>
                    <p> { '>' } gitHub() </p>
                    <p> { '>' } linkedIn() </p>
                    <p> { '>' } getCoins() </p>
                </div>
            </div>
            <div className={ appstyle.box }>
                <Card buttonTxt='click me' />
            </div>
        </section>

    );

}