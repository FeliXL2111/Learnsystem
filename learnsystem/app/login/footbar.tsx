import styless from './page.module.css'

export default function Footbar(){
    return (
        <main className={styless.footbarcss}>
            <div>
                <ul className={styless.ulwithoutbullets}>
                    <li><a href="/contact">Kontakt</a></li>
                    <li><a href="/agb">AGBs</a></li>
                </ul>
            </div>
            
        </main>
    )
}