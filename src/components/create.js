import React from 'react';
import axios from 'axios';

//Class extends from react
export class Create extends React.Component {
     //allows the bind to the controls
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangePlayer = this.onChangePlayer.bind(this);
        this.onChangeVenue = this.onChangeVenue.bind(this);
        this.onChangeTeam = this.onChangeTeam.bind(this);

        this.state = {
            Player: '',
            Venue: '',
            Team: ''

        }
    }
    //when  the value changes update the state
    onChangePlayer(a) {
        this.setState({
            Player: a.target.value
        });
    }
    //Onchange venue
    onChangeVenue(a){
        this.setState({
            Venue: a.target.value
        });
    }

    //Onchange team
    onChangeTeam(a){
       this.setState({
           Team: a.target.value
       });
    }
    //this will take an arguement
    onSubmit(a) {
        a.preventDefault();
        alert("Match: " + this.state.Player + " " + this.state.Venue +" "+ this.state.Team);

        const newMatch = {
            player: this.state.Player,
            venue: this.state.Venue,
            team: this.state.Team
        }
         //local host running on 4000
        //returns a promise
        axios.post('http://localhost:4000/api/matches',newMatch)
        .then((res)=>{
            console.log(res);
        })
        //Unhappy path
        .catch((err)=>{
            console.log(err);
        });
    }
    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Match Player:</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Player}
                            onChange={this.onChangePlayer}></input>
                    </div>

                    <div className="form-group">
                        <label>Add Match Venue: </label>
                        <input type= 'text'
                        className='form-control'
                        value={this.state.Venue}
                        onChange={this.onChangeVenue}></input>
                    </div>

                    <div className='form-group'>
                        <label>Match Team: </label>
                        <textarea type='text'
                        className='form-control'
                        value={this.state.Team}
                        onChange={this.onChangeTeam}>
                        </textarea>
                        </div>

                    <div className="form-group">
                        <input type='submit'
                            value='Add Match'
                            className='btn btn-primary'></input>

                    </div>
                </form>

            </div>
        );
    }
}

