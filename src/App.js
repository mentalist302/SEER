import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import CreateEvidence from "./components/create-evidence.component";
import EditEvidence from "./components/edit-evidence.component";
import EvidenceList from "./components/evidence-list.component";
import EvidenceUpdated from "./components/evidence-updated.component";
import HomePage from "./components/home-page.component";
import SearchEvidence from "./components/search-evidence.component";
import SignUp from "./components/sign-up.component";
import EvidenceDeleted from "./components/evidence-deleted.component";

import logo from "./logoFinal.png";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <a class="navbar-brand" href="/home" target="_blank">
              <img src={logo} width="35" height="35" alt="SEER" />
            </a>
            <Link to="/home" className="navbar-brand">Home</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="navbar-brand">Evidences</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="navbar-brand">Create Evidence</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/search" className="navbar-brand">Search Evidence</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/signup" className="navbar-brand">Sign Up</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={EvidenceList} />
          <Route path="/edit/:id" component={EditEvidence} />
          <Route path="/create" component={CreateEvidence} />
          <Route path="/updated" component={EvidenceUpdated} />
          <Route path="/home" component={HomePage} />
          <Route path="/search" component={SearchEvidence} />
          <Route path="/signup" component={SignUp} />
          <Route path="/deleted" component={EvidenceDeleted} />
        </div>
      </Router>
    );
  }
}

export default App;