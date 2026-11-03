import styles from './styles.module.css'

import { Letter } from '../Letter'

export function LetterUsed(){
    return(
        <div className={styles.letterUsed}>
            <h5>Letras utilizadas</h5>

            <div>
                <Letter value='r' size='small'color='wrong'/>
                <Letter value='e'size='small' color='correct'/>
            </div>
        </div>
    )
}