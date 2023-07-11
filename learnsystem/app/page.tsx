import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div id='introdution' className={styles.card}>
        <h1>Learnsystem</h1>
        <p>This is a Learnsystem to study. Mainly you work with memoriecards. 
          An algorothim build the best learncurve for you.</p>
      </div>

      

      <div className={styles.center}>
        <div id='loginbutton' className={styles.card}>Login</div>

        <div id='singinbutton' className={styles.card}>Sing in</div>
      </div>
    </main>
  )
}