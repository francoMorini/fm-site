import styles from './NavigationBar.module.css';

export function NavigationBar () 
{
    return (
        <nav className={ styles.navigationBar }>
            <h1> { '{fm}' } </h1>
            <ul>
                <li> me() </li>
                <li> projects() </li>
                <li> contact() </li>
            </ul>
        </nav>
    );
} 