import React, { Component } from "react";
import ReactDOM from "react-dom";
import AppContainer from "/containers/AppContainer"

export class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            object:"Ball",
            count:0 //less than five or make another API call
        }
    }

    render() {
        const {object, count} = this.state
        const increment =() => {
            this.setState({count: this.state.count + 1})
        }
        return (
            <AppContainer
                name="Jose"
                color="Green"
                object={object}
                count={count}
                increment={increment}
            />
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#app"));
