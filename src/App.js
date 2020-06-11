import React from 'react';
import './App.css';
import Encuesta from './Components/Encuesta';


const encuesta = [
  {
    pregunta: 'Usted Conoce al candidato xxx?',
    opciones: [
      { opcion: 'si' },
      { opcion: 'no' },
      { opcion: 'quiza' },
      { opcion: 'tal ves' }
    ]
  },
  {
    pregunta: 'a quien elegirias?',
    opciones: [
      { opcion: 'tony stark' },
      { opcion: 'Arya stark' },
      { opcion: 'Hulk' },
      { opcion: 'deadpool' }
    ]
  },
  {
    pregunta: 'cuantas chelas te tomas?',
    opciones: [
      { opcion: 1 },
      { opcion: '2 o 3' },
      { opcion:' 4 o 6' },
      { opcion: '7 o más' }
    ]
  }
]


function App() {
  return (
    <div className="App">
      <Encuesta encuesta={encuesta}/>
    </div>
  );
}

export default App;
