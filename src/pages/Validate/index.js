import { useState, useEffect } from 'react'
import { Header } from '../../components/Header'
import { useParams } from 'react-router-dom'
import styles from './styles.module.scss'
import { toast } from 'react-toastify'

export function Validate(props) {
    const [employee, setEmployee] = useState([])
    const { cpf } = useParams()

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch(`http://localhost:3333/employee/${cpf}`, options)
            .then(response => response.json())
            .then(data => setEmployee(data))
            .catch(error => {
                console.log(error)
                toast.success('Error ao buscar os dados.')
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function handleDeleteButton() {
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        await fetch(`http://localhost:3333/employee/${cpf}`, options)
        toast.success('Funcionário deletado com sucesso!')
        props.history.push('/registros')
    }

    async function handleValidateButton(isValidate) {
        const data = {
            "valid": `${isValidate}`
        }

        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        await fetch(`http://localhost:3333/employee/${cpf}`, options)
        toast.success('Dados do funcionário alterados com sucesso!')
        props.history.push('/registros')
    }

    return (
        <main className={styles.container}>
            <Header>
                <div>
                    <h1>Dados do funcionário</h1>
                    <button onClick={() => props.history.goBack()}>Voltar</button>
                </div>
            </Header>
            {employee.length > 0 ?
                <>
                    <div className={styles.employeeInfos}>
                        <div className={styles.employeeInfo}>
                            <span>Id</span>
                            <p>{employee[0]?.id}</p>
                        </div>
                        <hr className={styles.divider} />

                        <div className={styles.employeeInfo}>
                            <span>Nome</span>
                            <p>{employee[0]?.name}</p>
                        </div>
                        <hr className={styles.divider} />

                        <div className={styles.employeeInfo}>
                            <span>E-mail</span>
                            <p>{employee[0]?.email}</p>
                        </div>
                        <hr className={styles.divider} />

                        <div className={styles.employeeInfo}>
                            <span>CPF</span>
                            <p>{employee[0]?.cpf}</p>
                        </div>
                        <hr className={styles.divider} />

                        <div className={styles.employeeInfo}>
                            <span>Celular</span>
                            <p>{employee[0]?.phone_number}</p>
                        </div>
                        <hr className={styles.divider} />

                        <div className={styles.employeeInfo}>
                            <span>Status</span>
                            <p>{employee[0]?.valid ? 'Válido' : 'Não válido'}</p>
                        </div>
                        <hr className={styles.divider} />
                    </div>

                    <div className={styles.buttons}>
                        <button className={styles.validate} onClick={() => handleValidateButton('true')}>
                            Validar
                        </button>
                        <button className={styles.noValidate} onClick={() => handleValidateButton('false')}>
                            Não validar
                        </button>
                        <button className={styles.delete} onClick={handleDeleteButton}>
                            Excluir
                        </button>
                    </div>
                </>
                :
                <p>Funcionário não encontrado</p>
            }
        </main>
    )
}
