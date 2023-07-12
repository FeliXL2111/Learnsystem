import Footbar from "./footbar"

export default function Home(){
    return (
        <main>
            <div id="maincard">
                <input type="text" id="email"/>
                <input type="text" id="password" />
            </div>

            <Footbar></Footbar>
        </main>
    )
}