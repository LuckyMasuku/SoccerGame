import React from 'react';
import { Matches } from './matches';
import axios from 'axios';
export class Read extends React.Component {

    state = {
        matches: []

    };

    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonBlob/796843d1-4aee-11eb-99b0-6f78780eabc2')
            .then(
                (response) => {
                    this.setState({ matches: response.data.Search })
                })
            .catch((error)=>{ 
                console.log(error)
            });

    }
    render() {
        return (
            <div>
                <h1> The is my read Component.</h1>
                <Matches matches={this.state.matches}></Matches>
            </div>
        );
    }
}

