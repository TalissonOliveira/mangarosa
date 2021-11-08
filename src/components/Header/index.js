import styles from './styles.module.scss'

import logo from '../../assets/logo.svg'

export function Header({ children }) {
    return (
        <header className={styles.header}>
            <img src={logo} alt="MangaRosa" />
            {children}
        </header>
    )
}