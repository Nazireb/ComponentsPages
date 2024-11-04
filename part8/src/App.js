import "./App.css"
import Gamess from "./components/Gamess";



function App(){
    return (
        <div>
            <header>
                <h1>Games</h1>
            </header>
            <Gamess
            name="God of War Ragnarok"
            description=" God of War Ragnarok is a sequal to God of War (2018), in where Kratos and his son Atreus fight against
                            gods and monsters in a battle to stop Ragnarok."
            image="images/GodofWar.avif"
            />
        </div>
    )
}
export default App;