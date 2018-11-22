import React, { Component, Fragment } from 'react';
import { Typography, Toolbar, Button } from '@material-ui/core';
import './App.css';

class TopMenu extends Component {
  constructor(props){
    super(props)
    this.state = {
      locate: 'Home'
    }
  }
  componentDidMount(){
    this.changeLocation = this.changeLocation.bind(this);
  }
  changeLocation = val => {
    this.setState({locate:val});
  }
  selection = () => {
    switch(this.state.locate){
      case 'Home':
      return <Home />
      break;
      case 'Experience':
      return <Experience />
      break;
      case 'Skills':
      return <Skills />
      break;
      case 'Contact':
      return <Contact />
      break;
    }
  }
  render = () => {
    return (
      <Fragment>
        <Toolbar variant="dense">
          <Typography style={{flex:1}}>
            <Button variant="outlined" onClick={this.changeLocation.bind(this,"Home")}>Home</Button>
          </Typography>
          <Button onClick={this.changeLocation.bind(this,"Experience")}>experience</Button>
          <Button onClick={this.changeLocation.bind(this,"Skills")}>slills set</Button>
          <Button onClick={this.changeLocation.bind(this,"Contact")}>contact</Button>
        </Toolbar>
        
        <div className="content">
          {this.selection()}
        </div>
      </Fragment>
    );
  }
}

const Home = () => <h1>Home</h1>;
const Experience = () => <h1>Experience</h1>;
const Skills = () => <h1>Skills</h1>;
const Contact = () => <h1>Contact</h1>;

class App extends Component {
  render() {
    return (
      <Fragment>
        <TopMenu />
      </Fragment>
    );
  }
}

export default App;
