import logo from '../../assets/logo.png'
import restart from '../../assets/restart.svg'

import styles from './styles.module.css'

type Props = {
    current: number
    max: number
    onStart: () => void 
}

export function Header({current, max, onStart}: Props){
    return (
        <div className={styles.container}>
            <img src={logo} alt="Logo" />

            <header>
                <span>
                    <strong>{current}</strong> de {max} tentativas
                </span>

                <button type='button' onClick={onStart}>
                    <img src={restart} alt="Icone de reiniciar" />
                </button>
            </header>
        </div>
    )
}