import Footbar from "../components/footbar"
import styles from "../page.module.css"

export default function Home(){
    return (
        <main>
            <div id="maincard" className={styles.center}>
                <input type="text" id="email"/>
                <input type="text" id="password" />
            </div>

            <Footbar></Footbar>
        </main>
    )
}