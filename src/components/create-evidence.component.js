import React, { Component } from 'react';
import axios from 'axios';

export default class CreateEvidence extends Component {

    constructor(props) {
        super(props);

        this.onChangeEvidenceDescription = this.onChangeEvidenceDescription.bind(this);
        this.onChangeEvidenceAuthor = this.onChangeEvidenceAuthor.bind(this);
        this.onChangeEvidenceVolume = this.onChangeEvidenceVolume.bind(this);
        this.onChangeEvidencePages = this.onChangeEvidencePages.bind(this);
        this.onChangeEvidenceURL = this.onChangeEvidenceURL.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            evidence_description: '',
            evidence_author: '',
            evidence_volume: '',
            evidence_pages: '',
            evidence_url: '',
            evidence_completed: false
        }
    }

    onChangeEvidenceDescription(e) {
        this.setState({
            evidence_description: e.target.value
        });
    }

    onChangeEvidenceAuthor(e) {
        this.setState({
            evidence_author: e.target.value
        });
    }

    onChangeEvidenceVolume(e) {
        this.setState({
            evidence_volume: e.target.value
        });
    }

    onChangeEvidencePages(e) {
        this.setState({
            evidence_pages: e.target.value
        });
    }

    onChangeEvidenceURL(e) {
        this.setState({
            evidence_url: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.todo_description}`);
        console.log(`Todo Responsible: ${this.state.todo_responsible}`);

        const newEvidence = {
            evidence_description: this.state.evidence_description,
            evidence_author: this.state.evidence_author,
            evidence_volume: this.state.evidence_volume,
            evidence_pages: this.state.evidence_pages,
            evidence_url: this.state.evidence_url,
            evidence_completed: this.state.evidence_completed
        };

        axios.post('http://localhost:4000/evidence/add', newEvidence)
            .then(res => console.log(res.data));
        
        this.setState({
            evidence_description: '',
            evidence_author: '',
            evidence_volume: '',
            evidence_pages: '',
            evidence_url: '',
            evidence_completed: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <header className="App-header-edit">
                <h3>Create New Evidence</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.evidence_description}
                                onChange={this.onChangeEvidenceDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Author: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.evidence_author}
                                onChange={this.onChangeEvidenceAuthor}
                                />
                    </div>
                    <div className="form-group">
                        <label>Volume: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.evidence_volume}
                                onChange={this.onChangeEvidenceVolume}
                                />
                    </div>
                    <div className="form-group">
                        <label>Pages: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.evidence_pages}
                                onChange={this.onChangeEvidencePages}
                                />
                    </div>
                    <div className="form-group">
                        <label>URL: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.evidence_url}
                                onChange={this.onChangeEvidenceURL}
                                />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Evidence" className="btn btn-primary" />
                    </div>
                </form>
                </header>
            </div>
        )
    }
}