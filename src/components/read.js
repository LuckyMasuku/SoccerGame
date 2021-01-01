import React from 'react';
import { Matches } from './matches';

export class Read extends React.Component{

 state = {
     matches:[
        {
            "Player": "Hakkim",
            "Venue": "Newcastle",
            "imdbID": "tt4154756",
            "Type": "match",
            "Team": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Hakim_Ziyech_2020.jpg"
        },
        {
            "Player": "Thiago",
            "Venue": "London",
            "imdbID": "tt3498820",
            "Type": "match",
            "Team": "https://cdn.footballtransfertavern.com/wp-content/uploads/2020/09/Thiago-Alcantara-in-action-for-Liverpool.jpg"
        },
        {
            "Player": "Ben",
            "Venue": "Sunderland",
            "imdbID": "tt0472062",
            "Type": "match",
            "Team": "https://i2-prod.dailystar.co.uk/incoming/article19445534.ece/ALTERNATES/s1227b/0_httpscdnimagesdailystarcoukdynamic122photos804000900x738862804"
        },
        {
            "Player": "Reece",
            "Venue": "Chalsea",
            "imdbID": "tt0472061",
            "Type": "match",
            "Team": "https://i2-prod.football.london/incoming/article19228145.ece/ALTERNATES/s1200b/1_GettyImages-1229473615.jpg"
        },
        {
            "Player": "Tammy",
            "Venue": "Mancity",
            "imdbID": "tt0472063",
            "Type": "match",
            "Team": "https://i2-prod.dailystar.co.uk/incoming/article19445534.ece/ALTERNATES/s1227b/0_httpscdnimagesdailystarcoukdynamic122photos804000900x738862804"
        }
 ]

 };
    render(){
        return(
               <div>
                   <h1> The is my read Component.</h1>
                   <Matches matches={this.state.matches}></Matches>
               </div>
        );
    }
}

