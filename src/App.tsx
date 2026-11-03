import styles from './app.module.css'

import {Header} from "./components/Header"
import { Tip } from './components/Tip'
import { Letter } from './components/Letter'
import { Input } from './components/Input'
import { Button } from './components/Button'

export default function App(){

  function handleRestartGame(){
    alert('Reiniciar o jogo')
  }

  return(
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onStart={handleRestartGame}/>
        
        <Tip tip='Linguagem de programação dinâmica'></Tip>
        <div className={styles.word}>
          <Letter value='R'/>
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
          <Input autoFocus maxLength={1} placeholder='?'/>
          <Button title='Confirmar'/>
        </div>
      </main>
    </div>
  )
}