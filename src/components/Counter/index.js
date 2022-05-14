import {useSelector, useDispatch} from 'react-redux';
import {incrementAction, resetAction, decrementAction} from '../../store/actionCreators';

function Counter() {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch()

    const decrement = () => dispatch(decrementAction());
    const reset = () => dispatch(resetAction());
    const increment = () => dispatch(incrementAction());

    return (
        <div>
            <h3>Count: {count}</h3>

            <div>
                <button onClick={decrement}>- Decrement</button>
                <button onClick={reset}>Reset</button>
                <button onClick={increment}>+ Increment</button>
            </div>
        </div>
    )
}

export default Counter;