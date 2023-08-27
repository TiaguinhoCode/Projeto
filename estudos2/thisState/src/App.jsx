import { Component } from "react";

export class Home extends Component {
    state = {
        counter: 0
    }

    handleClick = () => {
        this.setState(
            (prevState, prevProps) => {
                console.log(prevProps.counter);
                return { counter: prevState.counter + 1}
            },
            // CallBack se n tiver callback ele seria assicrona 
            () => {
                // Inconsientimento näo tem atraso
                console.log(this.state.counter)
            }
            );
        // Digamos q eu preciso fazer mais coisa dentro do minha funcao
    }

    render() {
        return (
            <div className="container">
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleClick}>Increment</button>
            </div>
        );
    }
}