import styles from './NavigationBar.module.css';

export function NavigationBar () 
{
    return (
        <nav className={ styles.navBar }>
            <ul>
                <li> me() </li>
                <li> projects() </li>
                <li> contact() </li>
            </ul>
        </nav>
    );
} 