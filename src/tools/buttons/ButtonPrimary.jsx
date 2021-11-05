import styles from './ButtonPrimary.module.css';

export function ButtonPrimary ( { message } ) 
{
    return (
        <button className={ styles.primary_button }> { message } </button>
    );
}