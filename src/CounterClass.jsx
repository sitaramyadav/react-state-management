import React, { Component } from "react";
import { render } from "react-dom";

import "./styles.scss";

class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            width: window.innerWidth
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        document.title = this.state.count;
        window.addEventListener("resize", this.handleResize);
    }

    componentDidUpdate() {
        document.title = `Counter: ${this.state.count}`;
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }
    increment() {
        this.setState({ count: this.state.count + 1 });
        console.log(this.state.count);
    }

    decrement = () => {
        this.setState((state, props) => {
            if (state.count <= 0) return;
            return { count: state.count - 1 };
        });
    };

    reset = () => {
        this.setState({
            count: 0
        });
    };

    handleResize = () => {
        this.setState({ width: window.innerWidth });
    };

    render() {
        const { count, width } = this.state;

        return (
            <main className="Counter">
                <p className="count">{count}</p>
                <p className="window-width">{`Window Width : ${width}`}</p>
                <section className="controls">
                    <button onClick={this.increment}>Increment</button>
                    <button onClick={this.decrement}>Decrement</button>
                    <button onClick={this.reset}>Reset</button>
                </section>
            </main>
        );
    }
}

render(<Application />, document.getElementById("root"));
