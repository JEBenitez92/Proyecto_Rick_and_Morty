import './App.css'
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';
import From from './components/Form.jsx';
import { Routes,Route, useLocation } from 'react-router-dom';
import {useState} from 'react';
function App () {
  const [characters, setCharacters] = useState([]);
  const Location = useLocation();

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
        {Location.pathname === "/" ? null:<Nav onSearch={onSearch} />}
      <Routes>
        <Route path='/' element={<From />} />
        <Route path='/home' element={<Cards characters={characters}
          onClose = {onClose} />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:detailId' element={<Detail />} />
      </Routes>
      
      </div>
    </div>
  )
}

/*
Esto sirve para que la barra de navegacion no se vea en todos los componenetes. En este caso 
que no se vea en la pantalla de login.
const Location = useLocation();
{Location.pathname === "/" ? null:<Nav onSearch={onSearch} />}
*/


export default App
