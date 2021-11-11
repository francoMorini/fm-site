import { ButtonPrimary } from "../buttons/ButtonPrimary";
import styles from './Card.module.css';

export function Card ( { src = '', title = '', description = '', active = false, buttonTxt = '' } ) 
{

    return (
        <li className={ styles.primary_card }>
            <img src={ src } alt={ title } />
            <h3> { title } </h3>
            <p> { description } </p>

            { 
                ( buttonTxt !== '' ) ? 
                <ButtonPrimary expanded={ true } message={ buttonTxt } /> 
                : 
                '' 
            }

        </li>
    );

}