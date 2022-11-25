import './App.css'
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import characters from './data.js';
import {useState} from 'react';
function App () {
  const [characters, setCharacters] = useState([]);

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

  const onClose=(id)=>{
    setCharacters(oldCharacters => oldCharacters.filter(card=>card.id !== id))
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Nav onSearch={onSearch} />
      </div>
      <hr />
      <div>
        <Cards
          characters={characters}
          onClose = {onClose}
        />
      </div>
    </div>
  )
}

export default App
