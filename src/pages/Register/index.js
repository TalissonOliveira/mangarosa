import styles from './styles.module.scss'

import logo from '../../assets/logo.svg'

export function Register() {
    return (
        <main className={styles.container}>
            <img className={styles.logo} src={logo} alt="Logo MangaRosa" />

            <form className={styles.form}>
                <span className={styles.info}>
                    Preencha os dados para realizar o registro de ponto eletrônico.
                </span>

                <div className={styles.input}>
                    <label htmlFor="name">Nome completo *</label>
                    <input type="text" name="name" id="name" placeholder="Digite seu nome"/>
                </div>
                
                <div className={styles.input}>
                    <label htmlFor="name">Email *</label>
                    <input type="email" name="email" id="email" placeholder="email@example.com"/>
                </div>

                <div className={styles.input}>
                    <label htmlFor="name">CPF *</label>
                    <input type="text" name="cpf" id="cpf" placeholder="000.000.000-00"/>
                </div>

                <div className={styles.input}>
                    <label htmlFor="name">Celular</label>
                    <input type="text" name="phone_number" id="phone_number" placeholder="(xx) xxxxx-xxxx"/>
                </div>

                <button className={styles.button} type="submit">Enviar dados</button>
            </form>
        </main>
    )
}