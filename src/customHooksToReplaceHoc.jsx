import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.scss";

const useCounter = () => {
    const [count, setCount] = useState(0);

    const onIncrease = () => setCount(count + 1);
    const onDecrease = () => setCount(count - 1);

    return [count, onIncrease, onDecrease];
};

const App = () => {
    const [count, onIncrease, onDecrease] = useCounter();

    useEffect(() => {
        document.title = "Counter" + count;
    }, [count]);

    return (
        <main className="Counter">
            <p className="count">{count}</p>
            <section className="controls">
                <button onClick={onIncrease}>Increment</button>
                <button onClick={onDecrease}>Decrement</button>
            </section>
        </main>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
