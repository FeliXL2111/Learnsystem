import Footbar from "../components/footbar"
import styles from "../page.module.css"

export default function Home(){
    return (
        <main>
            <p className={styles.center}>All rights by me</p>
            <Footbar></Footbar>
        </main>
    )
}