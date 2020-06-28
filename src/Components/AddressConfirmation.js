import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
  formNumbers: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'spaceBetween',
    marginBottom: '1rem'
  },
  formNumberItem: {
    marginRight: '1.5rem',
  },
  root:{
    display: 'flex',
    flexDirection: 'column'
  }
}));

function AddressConfirmation () {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>
        Dirección
      </h1>
      <form className={classes.form} noValidate autoComplete="off">
      <div>
        <TextField className={classes.formItem} id="outlined-basic" label="calle" variant="outlined" />
        <div className={classes.formNumbers}>
          <TextField className={classes.formNumberItem} id="outlined-basic" label="#Exterior" variant="outlined" size='small' />
          <TextField id="outlined-basic" label="#Interior" variant="outlined" size='small' />
        </div>
        <TextField className={classes.formItem} id="outlined-basic" label="Colonia" variant="outlined" />
        <TextField className={classes.formItem} id="outlined-basic" label="Código Postal" variant="outlined" />
      </div>    
      </form>
    </div>
  )
}

export default AddressConfirmation;