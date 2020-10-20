import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Evidence = props => (
    <tr>
        <td>{props.evidence.evidence_description}</td>
        <td>{props.evidence.evidence_author}</td>
        <td>{props.evidence.evidence_volume}</td>
        <td>{props.evidence.evidence_pages}</td>
        <td>{props.evidence.evidence_url}</td>
        <td>
            <Link to={"/edit/"+props.evidence._id}>Edit</Link>
        </td>
        <td>
            <Link to={"/deleted/"+props.evidence._id}>Delete</Link>
        </td>
    </tr>
)

export default class EvidenceList extends Component {

    constructor(props) {
        super(props);
        this.state = {evidence: []};
    }

    componentDidMount() {
        axios.get(process.env.MONGODB_URI || 'http://localhost:4000/evidence/')
            .then(response => {
                this.setState({ evidence: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    evidenceList() {
        return this.state.evidence.map(function(currentEvidence, i){
            return <Evidence evidence={currentEvidence} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <header className="App-header-edit">
                <h3>Evidence List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Author</th>
                            <th>Volume</th>
                            <th>Pages</th>
                            <th>URL</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.evidenceList() }
                    </tbody>
                </table>
                </header>
            </div>
        )
    }
}
