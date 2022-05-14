import {Link} from 'react-router-dom';
import s from './Toolbar.module.scss';
import {useSelector} from 'react-redux';

function Toolbar() {
    const count = useSelector(state => state.count);

    return (
        <nav className={s.toolbar}>
            <Link className={s.brandLogo} to='/'>Count value = {count}</Link>

            <ul className={s.toolbarList}>
                <li className={s.toolbarItem}>
                    <Link className={s.toolbarLink} to='/'>Home</Link>
                </li>
                <li className={s.toolbarItem}>
                    <Link className={s.toolbarLink} to='about'>About</Link>
                </li>
                <li className={s.toolbarItem}>
                    <Link className={s.toolbarLink} to='counter'>Counter</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Toolbar;