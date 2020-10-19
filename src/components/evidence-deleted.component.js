import React, { Component } from 'react';
import axios from 'axios';
import './components.css';

export default class EvidenceDeleted extends Component {

    componentDidMount() {
        axios.get('http://localhost:4000/deleted/'+ this.props.match.params.id)
        .then(response => {
            this.setState({ evidence: response.data });
        })
        .catch(function (error){
            console.log(error);
        })
    }


    render() {
        return (
            <div>
                <header className="App-header-edit">
                    <h3> </h3>
                    <h3> </h3>
                    <h3>The Evidence has been deleted</h3>
                </header>
            </div>
        )
    }
}