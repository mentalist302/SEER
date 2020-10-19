import React, { Component } from 'react';
import axios from 'axios';
import './components.css';


export default class SearchEvidence extends Component {

    
    constructor(props) {
        super(props);

        this.onChangeEvidenceSearch = this.onChangeEvidenceSearch.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            evidence_search: [],
            evidence_description: [],
            evidence_author: [],
            evidence_volume: [],
            evidence_pages: [],
            evidence_url: []
        }
    }

    onChangeEvidenceSearch(e) {
        this.setState({
            evidence_search: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        axios.get('http://localhost:4000/evidence/find/' + this.state.evidence_search)
            .then(response => {
                this.setState({
                    evidence_description: response.data.evidence_description,
                    evidence_author: response.data.evidence_author,
                    evidence_volume: response.data.evidence_volume,
                    evidence_pages: response.data.evidence_pages,
                    evidence_url: response.data.evidence_url
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
        
        
    }

    render() {
        return (
            <div>
                <header className="App-header-edit">
                <h3>SearchEvidence</h3>
                <form onSubmit={this.onSubmit}>
                <div className="search-bar"> 
                        <label>Description</label>
                        <input  type="text"
                                className="search-bar"
                                value={this.state.evidence_search}
                                onChange={this.onChangeEvidenceSearch}
                                />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Search" className="btn btn-primary" />
                    </div>
                </form>

                <table className="table table-striped" style={{ marginTop: 20 }} >
                                <thead>
                                    <tr>
                                    <th>Description</th>
                                    <th>Author</th>
                                    <th>Volume</th>
                                    <th>Pages</th>
                                    <th>URL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>{this.state.evidence_description}</td>
                                    <td>{this.state.evidence_author}</td>
                                    <td>{this.state.evidence_volume}</td>
                                    <td>{this.state.evidence_pages}</td>
                                    <td>{this.state.evidence_url}</td>
                                    </tr>
                                </tbody>
                                </table>
                                
                </header>
            </div>
        )
    }
}