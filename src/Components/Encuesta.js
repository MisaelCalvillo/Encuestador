import React, { useState, useEffect } from 'react';
import Pregunta from './Pregunta';
import { makeStyles } from '@material-ui/core/styles';
import * as firebase from 'firebase'
import { Button } from '@material-ui/core';
import { connect } from 'react-redux'

// const styles = makeStyles({
//   root: {
//     display: 'flex',
//     justifyContent: 'center',
//     flexDirection: 'column',
//     alignContent:'center'
//   },
// })


const config = {
  apiKey: "AIzaSyDF3GpYdbtYA-Jkj27R7qLVe_RONDPkHOI",
  authDomain: "encuestascalvillo.firebaseapp.com",
  databaseURL: "https://encuestascalvillo.firebaseio.com",
  projectId: "encuestascalvillo",
  storageBucket: "encuestascalvillo.appspot.com", 
  messagingSenderId: "89954048228",
  appId: "1:89954048228:web:3d36bf23a92b9a1be5f4f1",
  measurementId: "G-68MLML2SE6"
}
firebase.initializeApp(config)

function Encuesta({encuesta, dispatch}) {
  const [value, setValue] = useState({name: 'pepe'})

  // useEffect(() => {
  //   const nameRef = firebase.database().ref().child('name')
  //   nameRef.on('value', snapshot => {
  //     setValue({name : snapshot.val()})
  //   })
  // });

  function subirUsuario() {
    dispatch({ type: 'SHOW_USER', email: 'devdanicm@gmial.com', password: '1233'})
  }
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
      <Button onClick={subirUsuario}>USER</Button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(Encuesta)