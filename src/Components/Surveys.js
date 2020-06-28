import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux'

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function Surveys () {
  return (
    <div>
      <List component="nav" aria-label="surveys container">
        <ListItemLink href="/survey">
          <ListItemText primary="Partidarios Nueva oxtotitlan" />
        </ListItemLink>
        <Divider />
        <ListItemLink href="/survey">
          <ListItemText primary="Partidarios Colonia Roma" />
        </ListItemLink>
      </List>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
  encuesta: state.encuesta
});

export default connect(mapStateToProps)(Surveys)