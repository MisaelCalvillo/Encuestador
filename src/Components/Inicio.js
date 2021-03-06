import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux'

import * as firebase from 'firebase'

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
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Inicio({dispatch, history}) {
  const classes = useStyles();
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
    dispatch({ type: 'SHOW_USER', email: emailValue, password: passwordValue})
    firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
      .then(result => {
        if(result.user.email){
          console.log(result.user.email)
          history.push(`/encuesta`)
        } else {
          alert('no existes :c')
          firebase.auth().signOut()
        }
      })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={validarUsuario}>
          <TextField
            variant="outlined"
            value={emailValue}
            onChange={handleEmailChange}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            value={passwordValue}
            onChange={handlePasswordChange}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  encuesta: state.encuesta
});

export default connect(mapStateToProps)(Inicio)