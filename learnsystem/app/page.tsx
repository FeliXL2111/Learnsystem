import styles from './page.module.css'
import Footbar from './components/footbar'

export default function Home() {
  return (
    <main className={styles.main}>
      <div id='introdution' className={styles.card}>
        <h1>Learnsystem</h1>
        <p>This is a Learnsystem to study. Mainly you work with memoriecards. 
          An algorothim build the best learncurve for you.</p>
      </div>

      

      <div className={styles.grid}>
        <a href="/login">
          <div id='loginbutton' className={styles.card}>Login</div>
        </a>
        
        <a href="/login">
          <div id='singinbutton' className={styles.card}>Sing in</div>
        </a>
        
      </div>

      <Footbar></Footbar>
    </main>
  )
}