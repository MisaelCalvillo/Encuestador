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

function Encuesta({encuesta}) {
  const classes = styles()

  function showTest(){
    const preguntasYrespuestas  = [];
    
    encuesta.forEach((preguntaActual, numeroDePregunta) => {
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