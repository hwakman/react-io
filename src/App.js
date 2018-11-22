import React, { Component, Fragment } from 'react';
import { Typography, Toolbar, Button } from '@material-ui/core';
import { BrowserRouter as Link, Route } from 'react-router-dom';
import './App.css';

class TopMenu extends Component {
  changeLink = locate => {
    window.location.replace('/'+locate);
  }
  render = () => {
    return (
      <Toolbar variant="dense">
        <Typography style={{flex:1}}>
          <Button onClick={this.changeLink.bind(this,"")} variant="outlined">Home</Button>
        </Typography>
        <Button onClick={this.changeLink.bind(this,"experience")}>experience</Button>
        <Button onClick={this.changeLink.bind(this,"skills")}>skills set</Button>
        <Button onClick={this.changeLink.bind(this,"contact")}>contact</Button>
      </Toolbar>
    );
  }
}

const Home = () => {
  return (
    <p>Home</p>
  )
}

const Experience = () => {
  return (
    <p>Experience</p>
  )
}

const Skills = () => {
  return (
    <p>Skills</p>
  )
}

const Contact = () => {
  return (
    <p>Contact</p>
  )
}

const Content = () => {
  return (
    <div className="content">
      <Route exact path="/" component={Home} />
      <Route path="/experience" component={Experience} />
      <Route path="/skills" component={Skills} />
      <Route path="/contact" component={Contact} />
    </div>
  )
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
