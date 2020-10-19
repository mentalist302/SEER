import React, { Component } from 'react';
import axios from 'axios';
import './components.css';

export default class EditEvidence extends Component {

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
            evidence_url: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/evidence/'+this.props.match.params.id)
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
        const obj = {
            evidence_description: this.state.evidence_description,
            evidence_author: this.state.evidence_author,
            evidence_volume: this.state.evidence_volume,
            evidence_pages: this.state.evidence_pages,
            evidence_url: this.state.evidence_url
        };
        console.log(obj);
        axios.post('http://localhost:4000/evidence/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/updated');
        //this.props.history.push('/evidence');
        
    }

    render() {
        return (
            <div>
                <header className="App-header-edit">
                <h3>Update Evidence</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label> Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.evidence_description}
                                onChange={this.onChangeEvidenceDescription}
                        />
                    </div>
                    <div className="form-group"> 
                        <label>Author: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.evidence_author}
                                onChange={this.onChangeEvidenceAuthor}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Volume: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.evidence_volume}
                                onChange={this.onChangeEvidenceVolume}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Pages: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.evidence_pages}
                                onChange={this.onChangeEvidencePages}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>URL: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.evidence_url}
                                onChange={this.onChangeEvidenceURL}
                                />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Update Evidence" className="btn btn-primary" />
                    </div>
                </form>
                </header>
            </div>
        )
    }
}