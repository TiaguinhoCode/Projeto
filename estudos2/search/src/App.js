import logo from './logo.svg';
import './App.css';
import { useMemo, useState } from 'react';


export default function App() {

  const [busca, setBusca] = useState('');

  const frutas = [
    'Banana',
    'Maca',
    'Morango',
    'Pera',
    'Uva',
    'Melao'
  ];

  // Fazer um filter 
  const frutasFiltradas = useMemo(() => {
    return frutas.filter((fruta) => fruta.toLowerCase().includes(busca.toLowerCase()));
  }, [frutas]) 

  console.log(busca);

  return (
    <div className="App">
      <input 
        type="text"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      <ul>
        {frutasFiltradas.map((frutas) => (
          <li key={frutas}>{frutas}</li>
        ))}
      </ul>
    </div>
  );
}

