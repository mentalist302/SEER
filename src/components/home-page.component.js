import React, { Component } from 'react';
import logoTwo from "./logo.png";
import './components.css';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                <img className="image" src={logoTwo} width="400" height="183" alt="SEER"/>
                <h3 className="header">Welcome To SEER</h3>
                </header>
            </div>
        )
        
    }
}