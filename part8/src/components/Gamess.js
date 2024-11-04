import "./Games.css";


function Gamess(gamess) {
    <section className="games-columns">
        <section>
            <img src={gamess.image} alt={gamess.name} />
        </section>
        <section>
            <h3>{gamess.name}</h3>
            <p>{gamess.description}</p>
        </section>
    </section>
}

export default Gamess;