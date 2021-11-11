import appstyle from "../../App.module.css";
import styles from './Contact.module.css';
import { Card } from "../../tools/cards/Card";

export function Contact () 
{

    return (

        <section className={ appstyle.container }>

            <div className={ appstyle.container_grid }>

                <div className={ appstyle.box }>
                    <h1> <span>public</span> contact () </h1>
                    <p className={ appstyle.comment }> { '//' } Be free to choose how to contact me </p>
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

            </div>

        </section>

    );

}