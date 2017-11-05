import React, {Component} from "react";
import ReactDom from "react-dom";
import VelocityNumInput from "./velocityNumInput.js"
import Planet from "./planet.js"

 class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            velocity : 0
        };
    }
    render(){
        return (
            <div className="app__container">
                <Planet velocity={this.state.velocity}/>
                <VelocityNumInput velocity={this.state.velocity} onInputUpdate={velocity=>this.setState({velocity})}/>
            </div>
        );
    }

}

ReactDom.render(<App/>,document.querySelector(".container"));