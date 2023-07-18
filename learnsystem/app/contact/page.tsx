import Footbar from "../components/footbar"
import styles from "../page.module.css"

export default function Home(){
    return (
        <main>
            <p className={styles.center}>E-mail: febernard@web.de</p>
            <Footbar></Footbar>
        </main>
    )
}