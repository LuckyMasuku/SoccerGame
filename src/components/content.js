import React from 'react';

export class Content extends React.Component{


    render(){
        return(
               <div>
                    <h1>Welcome to my game</h1>
                 <h2>It is {new Date().toLocaleTimeString()}.</h2>
               </div>
        );
    }
}

