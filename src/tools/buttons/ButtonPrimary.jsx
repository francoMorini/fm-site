import styles from './ButtonPrimary.module.css';

export function ButtonPrimary ( { message, active = false, expanded = false } ) 
{

    const specialButton  = ( active ) ? styles.specialButton : '';
    const buttonExpanded = ( expanded ) ? styles.buttonExpanded : '';

    return (
        <button className={ `
            ${ styles.primary_button } 
            ${ specialButton } 
            ${ buttonExpanded }
        ` }> { message } </button>
    );
}