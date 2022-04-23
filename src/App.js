import { useState } from 'react';
import './App.css';
import Eleicao from './components/eleicao';


function App() {

  const [visivel, setVisivel] = useState(false)
  const mostrarComponente = ()=>{
    setVisivel(!visivel)
  }

  return (
    <div >
    <button onClick={mostrarComponente}>Mostar Componente</button>
    {visivel && <Eleicao/>}
    
    </div>
  );
}

export default App;
