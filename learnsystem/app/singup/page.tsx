import Footbar from "../components/footbar"

export default function Home(){
    return (
        <main>
            <div id="maincard">
                <input type="text" id="email"/>
                <input type="password" id="password"/>
                <input type="password" id="reappassword"/>
            </div>

            <Footbar></Footbar>
        </main>
    )
}