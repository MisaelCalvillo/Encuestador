import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { connect } from 'react-redux';

const styles = makeStyles({
  contenedor: {
    textAlign: 'left',
    fontSize: '1.3rem',
    margin: '20px 0 20px 0'
  },
  pregunta: {
    marginTop: '5px'
  },
  respuestas: {
    marginTop: '10px',
    fontSize:'1rem'
  },
  respuesta: {
    marginRight: '15px'
  }
})
const preguntas = [
  {
    pregunta: "1. Cuál es la capital de Irán?",
    respuestas: {
      a: "Bagdad",
      b: "Teherán",
      c: "Islamabad"
    },
    respuestaCorrecta: "b"
  },
  {
    pregunta: "2. Cuál es la capital de Irak?",
    respuestas: {
      a: "Kuwait",
      b: "Dubai",
      c: "Bagdad"
    },
    respuestaCorrecta: "c"
  },
  {
    pregunta: "3. Cuál es la capital de Noruega?",
    respuestas: {
      a: "Roma",
      b: "Copenague",
      c: "Estocolmo",
      d: "Oslo"
    },
    respuestaCorrecta: "d"
  },
  {
    pregunta: "4. Cuál es la capital de Serbia?",
    respuestas: {
      a: "Belgrado",
      b: "Zagreb",
      c: "Kabul"
    },
    respuestaCorrecta: "a"
  },
  {
      pregunta: "5. Cuál es la capital de Australia?",
      respuestas: {
          a: "Sidney",
          b: "Zurich",
          c: "Canberra"
    },
    respuestaCorrecta: "c"
  },
  {
    pregunta: "6. Cuál es la capital de Canadá?",
    respuestas: {
      a: "Toronto",
      b: "Montreal",
      c: "Ontario"
    },
    respuestaCorrecta: "c"
  },
  {
    pregunta: "7. Cuál es la capital de Vietnam?",
    respuestas: {
      a: "Puket",
      b: "Ho Chin Ming",
      c: "Pan Lao Kung"
    },
    respuestaCorrecta: "b"
  },
  {
    pregunta: "8. Cuál es la capital de China?",
    respuestas: {
      a: "Shangai",
      b: "Pekín",
      c: "Seul"
    },
    respuestaCorrecta: "b"
  },
  {
    pregunta: "9. Cuál es la capital de Pakistan?",
    respuestas: {
      a: "Islamabad",
      b: "Kuwait",
      c: "Kabul"
    },
    respuestaCorrecta: "a"
  },
  {
    pregunta: "10. Cuál es la capital de Marruecos?",
    respuestas: {
      a: "Casablanca",
      b: "Rabat",
      c: "Kabul"
    },
    respuestaCorrecta: "b"
  }
];


function Encuesta() {
  const classes = styles()

  function showTest(){
    const preguntasYrespuestas  = [];
    
    preguntas.forEach((preguntaActual, numeroDePregunta) => {
      const respuestas = [];
      for(let letraRespuesta in preguntaActual.respuestas){
        respuestas.push(
          <label className={classes.respuesta}> 
            <input type="radio" name={numeroDePregunta} value={letraRespuesta} />
            {`${letraRespuesta}.- ${preguntaActual.respuestas[letraRespuesta]}`}
          </label>
        )
      }
      preguntasYrespuestas.push(
        <div className={classes.contenedor}>
          <div className={classes.pregunta}> 
            {`${preguntaActual.pregunta}`}
          </div>
          <div className={classes.respuestas}> 
            {respuestas}
          </div>
        </div>
      );
    })
    return preguntasYrespuestas;
  }

  return (
    <div>
      {showTest()}
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
  encuesta: state.encuesta
});

export default connect(mapStateToProps)(Encuesta)