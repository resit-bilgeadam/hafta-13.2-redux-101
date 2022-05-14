import {useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h3>Count: {count}</h3>

            <div>
                <button onClick={() => setCount(count - 1)}>- Decrement</button>
                <button onClick={() => setCount(0)}>Reset</button>
                <button onClick={() => setCount(count + 1)}>+ Increment</button>
            </div>
        </div>
    )
}

export default Counter;