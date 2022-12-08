import './App.css'
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';
import From from './components/Form.jsx';
import Favorites from './components/Favorites.jsx';
import { Routes,Route, useLocation, useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react';

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

 const navigate = useNavigate();
 const [access, setAccess] = useState(false);
 const username = 'jonathan92_24@hotmail.com';
 const password = 'Jo1234#';

 useEffect(() => {
     !access && navigate('/');
  }, [access]);

 
 function login(useData) {
     if (useData.contraseña === password && useData.usuario === username) {
          setAccess(true);
          navigate('/home');
     }
     else{
      alert("Usuario o Contraseña INCORRECTO!!!")
     }
 }

 

  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        {Location.pathname === "/" ? null:<Nav onSearch={onSearch} setAccess={setAccess}/>}
      <Routes>
        <Route path='/' element={<From  login={login} />} />
        <Route path='/home' element={<Cards characters={characters}
          onClose = {onClose} />} />
        <Route path='/favorites' element={<Favorites />} />
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
