import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router } from "react-router-dom";
import Route from 'react-router-dom/Route';
import HomeComponent from './Component/HomeComponent';
import { Button, Navbar, NavDropdown, Nav, Form, FormControl,Card } from 'react-bootstrap';
import { FaGrinWink } from 'react-icons/fa';




class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">PO For AERIES</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text><a href="#login"><FaGrinWink/></a></Navbar.Text>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact strict component={HomeComponent}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
