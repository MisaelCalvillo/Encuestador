import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GoogleMaps from './location/GoogleMaps'

const useStyles = makeStyles((theme) => ({
  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  formItem:{
    marginBottom: '1rem'
  },
  root:{
    display: 'flex',
    flexDirection: 'column'
  }
}));

function Address () {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>
        Dirección
      </h1>
      <form className={classes.form} noValidate autoComplete="off">
      <div>
        <GoogleMaps />
      </div> 
      aqui va un mapita
      </form>
    </div>
  )
}

export default Address;