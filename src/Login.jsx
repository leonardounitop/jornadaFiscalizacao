import { useState } from 'react';
import styles from './Login.module.css'

export default function Login() {

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    function handleClick(event) {
        event.preventDefault();
    }

    return (

        <div className={styles.bg}>

            <div className={styles.container}>
                <img src="https://www.unitopconsultoria.com.br/img/icones/logoM.svg" className={styles.logo} />
                <h1 className={styles.titulo}>Fiscalização Jornada</h1>

                <div>
                    <form className={styles.form}>

                        <label htmlFor="" className={styles.label}>Usuário
                            <input
                                value={usuario}
                                onChange={(e) => setUsuario(e.target.value)}
                                type="text"
                                className={styles.input}
                                autoFocus={true}
                            />
                        </label>

                        <label htmlFor="" className={styles.label}>Senha
                            <input value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                type="password"
                                className={styles.input} /></label>
                    </form>
                    <button onClick={handleClick} className={styles.btn}>Entrar</button>
                </div>
            </div>



        </div>
    )
}
