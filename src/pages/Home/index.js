import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

import logo from '../../assets/logo.svg'

export function Home() {
    return (
        <main className={styles.container}>
            <img src={logo} alt="MangaRosa" />
            <h1>Bem-vindo(a)</h1>

            <div className={styles.buttons}>
                <Link to="/registros">Acessar registros</Link>
                <Link to="/registrar">Cadastrar funcionário</Link>
            </div>
        </main>
    )
}