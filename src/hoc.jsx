import React from "react";
import { render } from "react-dom";
import "./styles.scss";

const withCounter = Component => {
    return class ComponentWithCounter extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            };
            this.handleDecrement = this.handleDecrement.bind(this);
            this.handleIncrement = this.handleIncrement.bind(this);
            this.handleReset = this.handleReset.bind(this);
        }

        handleDecrement() {
            this.setState({ count: this.state.count - 1 });
        }

        handleIncrement() {
            this.setState({ count: this.state.count + 1 });
        }

        handleReset() {
            this.setState({ count: 0 });
        }

        componentDidMount() {
            setTimeout(() => {
                //any side effects
            }, 1000);
        }

        render() {
            const { count } = this.state;

            return (
                <Component
                    {...this.props}
                    count={count}
                    onIncrease={this.handleIncrement}
                    onDecrease={this.handleDecrement}
                    onReset={this.handleReset}
                />
            );
        }
    };
};

const App = ({ count, onIncrease, onDecrease, onReset }) => {
    return (
        <main className="Counter">
            <p className="count">{count}</p>
            <section className="controls">
                <button onClick={onDecrease}>Increment</button>
                <button onClick={onIncrease}>Decrement</button>
                <button onClick={onReset}>Reset</button>
            </section>
        </main>
    );
};

const AppWithCounter = withCounter(App);

render(<AppWithCounter />, document.getElementById("root"));
