import styles from './app.module.css'

import {Header} from "./components/Header"
import { Tip } from './components/Tip'
import { Letter } from './components/Letter'

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
      </main>
    </div>
  )
}