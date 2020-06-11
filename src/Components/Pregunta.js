import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const styles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: "500px"
  },
  pregunta: {
    textAlign: 'left',
    fontSize: '1rem'
  },
  opciones: {
    fontSize: '.8rem',
    textAlign: 'left'
  },
  opcion: {
    width: '90px',
    margin:'0 0',
    padding: '0 0'
  },
  checkbox: {
    height: '7px',
    width: '5px',
    padding: '5,5',
    marginTop: '3px',
    marginRight:'4px'
  }
})


function Pregunta({opciones, pregunta, indexPregunta}) {
  // const {value, setValue} = useState([])
  const classes = styles();

  function isChecked(opcion, pregunta) {
    console.log([{pregunta:pregunta ,respuesta: opcion}])
  }

  return (
    <div className={classes.container}>
      <p className={classes.pregunta}>{indexPregunta}. {pregunta}</p>
      
        <Grid container spacing={1} className={classes.opciones}>
          {opciones.map(opcion => {
            return (
                <Grid item xs={5} className={classes.opcion} >
                  <Checkbox className={classes.checkbox} onClick={()=> {isChecked(opcion.opcion, pregunta)}}/>
                  {opcion.opcion}
                </Grid>
              )
          })}          
        </Grid>
    </div>
  )
}

export default Pregunta;