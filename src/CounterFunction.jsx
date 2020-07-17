import React, { useState, useEffect } from "react";
import { render } from "react-dom";

import "./styles.scss";

function Application() {
    const [count, setCounter] = useState(0);
    const [windoWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        document.title = "Counter" + count;
    }, [count]);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [windoWidth]);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };
    const increment = () => {
        setCounter(count + 1);
        console.log(count);
    };

    const decrement = () => {
        setCounter((state, props) => {
            if (count <= 0) return;
            return count - 1;
        });
    };

    const reset = () => {
        setCounter(0);
    };
    return (
        <main className="Counter">
            <p className="count">{count}</p>
            <p class="window-width">Window width: {windoWidth}</p>
            <section className="controls">
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </section>
        </main>
    );
}

render(<Application />, document.getElementById("root"));
