import React from 'react';
import { MatchItem } from './matchItem';


export class Matches extends React.Component{

//Map takes matches and split it into sections
    render(){
        return this.props.matches.map((match)=>{
            return <MatchItem match={match}></MatchItem>
        })
               
      
    }
}

