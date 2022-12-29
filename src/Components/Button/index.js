import React, { Component } from "react";
import "./style.css";

class Button extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.action}>{this.props.content}</button>
            </div>
        );
    }
}

export default Button;