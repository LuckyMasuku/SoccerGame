import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import{Link} from 'react-router-dom';
import axios from 'axios';

export class MatchItem extends React.Component {

    constructor(){
        super();

        this.DeleteMatch = this.DeleteMatch.bind(this);
    }
    //The methord will add the id to the console and delete
    DeleteMatch(){
        console.log("Delete: "+this.props.match._id);

        axios.delete("http://localhost:4000/api/matches"+this.props.match._id)
        .then()
        .catch();

    }

    EditMatch(){
        console.log("Edit: "+this.props.match._id)
   }

  

    render() {
        return (
            <div>



                <Card>
                    <Card.Header>{this.props.match.player}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.match.team} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {this.props.match.venue}
                            </footer>
                        </blockquote>
                    </Card.Body>
                   
                   
                    <Button variant="danger" onClick={this.DeleteMatch}>Delete</Button>
                </Card>


            </div>
        );
    }
}

