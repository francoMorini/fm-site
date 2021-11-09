import styles from './NavigationBar.module.css';

export function NavigationBar () 
{
    return (
        <nav className={ styles.navigationBar }>
            <h1> { '{fm}' } </h1>
            <ul>
                <li> contact() </li>
                <li> projects() </li>
                <li> me() </li>
            </ul>
        </nav>
    );
} 