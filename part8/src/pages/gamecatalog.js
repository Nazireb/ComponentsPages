import Gamess from '../components/Gamess';
import './gamecatalog.css'; 
const gamecatalog = () => {

    function gamecatalog() {
        return (
          <div className="game-catalog">
            <h1>Game Catalog</h1>
            <div className="game-list">
            {Gamess.map((game, index) => (
            <Gamess key={index} game={game} />
              ))}
            </div>
          </div>
        );
      }

const Gamess = [
  {
    title: 'God of War Ragnarok',
    description: 'God of War Ragnarok is a sequel to God of War (2018), in which Kratos and his son Atreus fight against gods and monsters in a battle to stop Ragnarok.',
    price: '69.99',
    genre: 'Action-adventure',
    rating: '17+',
    platforms: ['Playstation', 'PC'],
    releaseDate: 'November 9, 2022',
    image: './images/GodofWar.avif',  
  },
 
];


};

export default gamecatalog;