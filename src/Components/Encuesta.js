import React from 'react';
import Pregunta from './Pregunta';
import { makeStyles } from '@material-ui/core/styles';
import useEncuestaState from '../hooks/useEncuestaState'

// const styles = makeStyles({
//   root: {
//     display: 'flex',
//     justifyContent: 'center',
//     flexDirection: 'column',
//     alignContent:'center'
//   },
// })


function Encuesta({encuesta}) {
  // const {respuestas, selectOption} = useEncuestaState([])
  return (
    <div>
      {encuesta.map((pregunta, i) => {
        return (
          <Pregunta 
            indexPregunta={i+1} 
            pregunta={pregunta.pregunta} 
            opciones={pregunta.opciones}
          />
        )
      })}
    </div>
  )
}

export default Encuesta