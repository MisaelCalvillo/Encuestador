import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux'


import * as firebase from 'firebase'
import { PuffLoader } from '../../Components';

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

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  }
}));

function AuthForm({className, dispatch, history}) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  function handleEmailChange(e){
    setEmailValue(e.target.value)
  }
  function handlePasswordChange(e){
    setPasswordValue(e.target.value)
  }

  function validarUsuario (e) {
    e.preventDefault()
    setLoading(true);
    dispatch({ type: 'SHOW_USER', email: emailValue, password: passwordValue})
    firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
      .then(({ user }) => {
          if (user) {
            console.log('Hay usuario', user);
          } else {
          }
          setLoading(false);
      })
      .catch(err => {
        setLoading(false);
      })
  }

  return (
    <Container 
      className={`${className} AuthForm`} 
      component="main" 
      maxWidth="xs"
    >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography 
          classes={{
            root: 'AuthForm__title'
          }}
          component="h1" 
          variant="h3">
          Encuestas
        </Typography>
        <form className={classes.form} noValidate onSubmit={validarUsuario}>
          <TextField
            classes={{
              root: 'AuthForm__email'
            }}
            variant="outlined"
            value={emailValue}
            onChange={handleEmailChange}
            margin="none"
            required
            fullWidth
            id="email"
            label="Correo electrónico"
            name="email"
            autoComplete="email"
          />
          <TextField
            classes={{
              root: 'AuthForm__password'
            }}
            variant="outlined"
            value={passwordValue}
            onChange={handlePasswordChange}
            margin="none"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            classes={{
              root: 'AuthForm__button'
            }}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            margin="none"
            size="large"
          >
            { loading ? <PuffLoader /> : "Ingresar"}
          </Button>
        </form>
      </div>
    </Container>
  )
}


const mapStateToProps = (state) => ({
  user: state.user,
  encuesta: state.encuesta
});

export default connect(mapStateToProps)(AuthForm)
