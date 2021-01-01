import React from 'react';

export class MatchItem extends React.Component {


    render() {
        return (
            <div>

                <h4>{this.props.match.Player}</h4>
                <p>{this.props.match.Venue}</p>
                <img src={this.props.match.Team} width="200" height="200"></img>


            </div>
        );
    }
}

