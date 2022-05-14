import { useState } from "react";
import {useDispatch} from 'react-redux';
import {changeAction} from '../../store/actionCreators';

function About() {
    const dispatch = useDispatch();
    const [val, setVal] = useState('0');

    const changeCount = () => {
        const numVal = Number(val);

        dispatch(changeAction(numVal));
    }

    return (
        <div>
            <h1>About Page</h1>
            <input onChange={e => setVal(e.target.value)} value={val} type='number' />
            <button onClick={changeCount}>Change Count</button>
        </div>
    )
}

export default About;