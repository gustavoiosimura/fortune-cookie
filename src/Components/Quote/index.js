import React, { Component } from 'react';
import './style.css';

class Quote extends Component{
    render(){
        return(
            <div>
                <h1 className="phrase">{this.props.content}</h1>
            </div>
        );
    }
}

export default Quote;