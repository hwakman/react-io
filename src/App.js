import React, { Component, Fragment } from 'react';
import { Typography, Toolbar, Button } from '@material-ui/core';
import './App.css';

class TopMenu extends Component {
  render = () => {
    return (
      <Toolbar variant="dense">
        <Typography style={{flex:1}}>
          <Button>Home</Button>
        </Typography>
        <Button>experience</Button>
        <Button>skills set</Button>
        <Button>contact</Button>
      </Toolbar>
    );
  }
}

class Content extends Component {
  state = {
    location: ''
  }
  render = () => {
    return (
      <div className="content">
        <p>{this.state.location}</p>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Fragment>
        <TopMenu />
        <Content />
      </Fragment>
    );
  }
}

export default App;
