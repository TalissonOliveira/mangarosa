import { useState, useEffect } from 'react'
import { Header } from '../../components/Header'
import styles from './styles.module.scss'

export function Records(props) {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch('http://localhost:3333/employee', options)
            .then(response => response.json())
            .then(data => setEmployees(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <main className={styles.container}>
            <Header>
                <h1>Todos os registros de funcionários</h1>
            </Header>
            <table className={styles.table}>
                <thead className={styles.tableHead}>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody className={styles.tableBody}>
                    {employees.length > 0 ?
                        employees.map(employee => (
                            <tr onClick={() => props.history.push(`/${employee.cpf}/validar`)}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.cpf}</td>
                                <td>{employee.valid ? 'Válido' : 'Não válido'}</td>
                            </tr>
                        ))
                        :
                        <p>Nada por aqui</p>
                    }
                </tbody>
            </table>
        </main>
    )
}