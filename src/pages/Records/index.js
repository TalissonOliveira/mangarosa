import { Header } from '../../components/Header'
import styles from './styles.module.scss'

export function Records() {
    return (
        <main className={styles.container}>
            <Header>
                <h1>Todos os registros de funcionários</h1>
            </Header>
            <table className={styles.table}>
                <thead className={styles.tableHead}>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Status</th>
                </thead>
                <tbody className={styles.tableBody}>
                    <tr>
                        <td>1</td>
                        <td>Talisson Olasdasdasdeira de Souza</td>
                        <td>123.123.123-99</td>
                        <td>Não validado</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Talisson Oliveira de Souza</td>
                        <td>123.123.123-99</td>
                        <td>Não validado</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Talisson Oliveira de Souza</td>
                        <td>123.123.123-99</td>
                        <td>Não validado</td>
                    </tr>
                </tbody>
            </table>
        </main>
    )
}