import { useState } from 'react'
import styles from './styles.module.scss'

import { Header } from '../../components/Header'

import { formatCPF, formatPhone_number } from '../../scripts/masks'
import { toast } from 'react-toastify'

export function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [phone_number, setPhone_number] = useState('')
    const [skills, setSkills] = useState([])

    async function handleSubmitForm(event) {
        event.preventDefault()

        const data = {
            name: name,
            email: email,
            cpf: cpf,
            phone_number: phone_number,
            skills: JSON.stringify(skills)
        }

        await fetch('http://localhost:3333/employee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            data.type === 'Error' ? 
                toast.error(data.message)
                :
                toast.success(data.message)

                setName('')
                setEmail('')
                setCpf('')
                setPhone_number('')
                setSkills([])
        })
    }
    
    function handleCheckboxChange(event) {
        if(event.target.checked) {
            setSkills(prevState => [...prevState, event.target.value])
        }
    }

    return (
        <main className={styles.container}>
            <Header />

            <form className={styles.form} onSubmit={handleSubmitForm}>
                <span className={styles.info}>
                    Preencha os dados para realizar o registro de ponto eletrônico.
                </span>

                <div className={styles.input}>
                    <label htmlFor="name">Nome completo *</label>
                    <input
                        type="text"
                        required
                        name="name" id="name"
                        value={name}
                        placeholder="Digite seu nome"
                        onChange={event => setName(event.target.value)}
                    />
                </div>
                
                <div className={styles.input}>
                    <label htmlFor="email">Email *</label>
                    <input
                        type="email"
                        required
                        name="email"
                        id="email"
                        value={email}
                        placeholder="email@example.com"
                        onChange={event => setEmail(event.target.value)}
                    />
                </div>

                <div className={styles.input}>
                    <label htmlFor="cpf">CPF *</label>
                    <input
                        type="text"
                        required
                        name="cpf"
                        id="cpf"
                        placeholder="000.000.000-00"
                        onChange={event => setCpf(formatCPF(event.target.value))}
                        value={cpf}
                        maxLength={14}
                    />
                </div>

                <div className={styles.input}>
                    <label htmlFor="phone_number">Celular</label>
                    <input
                        type="text"
                        name="phone_number"
                        id="phone_number"
                        placeholder="(xx) xxxxx-xxxx"
                        value={phone_number}
                        onChange={event => setPhone_number(formatPhone_number(event.target.value))}
                        maxLength={15}
                    />
                </div>

                <div className={styles.checkboxGroup}>
                    <span>Selecione no máximo três habilidades:</span>
                    <div className={styles.checkbox}>
                        <input
                            type="checkbox"
                            name="skills"
                            id="git"
                            value="Git"
                            onChange={event => handleCheckboxChange(event)}
                        />
                        <label htmlFor="git">Git</label>
                    </div>

                    <div className={styles.checkbox}>
                        <input
                            type="checkbox"
                            name="skills"
                            id="react"
                            value="React"
                            onChange={event => handleCheckboxChange(event)}
                        />
                        <label htmlFor="react">React</label>
                    </div>

                    <div className={styles.checkbox}>
                        <input
                            type="checkbox"
                            name="skills"
                            id="php"
                            value="PHP"
                            onChange={event => handleCheckboxChange(event)}
                        />
                        <label htmlFor="php">PHP</label>
                    </div>

                    <div className={styles.checkbox}>
                        <input
                            type="checkbox"
                            name="skills"
                            id="nodejs"
                            value="NodeJS"
                            onChange={event => handleCheckboxChange(event)}
                        />
                        <label htmlFor="nodejs">NodeJS</label>
                    </div>

                    <div className={styles.checkbox}>
                        <input
                            type="checkbox"
                            name="skills"
                            id="devops"
                            value="DevOps"
                            onChange={event => handleCheckboxChange(event)}
                        />
                        <label htmlFor="devops">DevOps</label>
                    </div>

                    <div className={styles.checkbox}>
                        <input
                            type="checkbox"
                            name="skills"
                            id="bando-de
                            dados" value="Banco de Dados"
                            onChange={event => handleCheckboxChange(event)}
                        />
                        <label htmlFor="bando-de-dados">Banco de Dados</label>
                    </div>

                    <div className={styles.checkbox}>
                        <input
                            type="checkbox"
                            name="skills"
                            id="typescript"
                            value="TypeScript"
                            onChange={event => handleCheckboxChange(event)}
                        />
                        <label htmlFor="typescript">TypeScript</label>
                    </div>
                </div>

                <button className={styles.button} type="submit">Enviar dados</button>
            </form>
        </main>
    )
}