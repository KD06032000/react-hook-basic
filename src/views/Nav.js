import './Nav.scss';
import { Link ,NavLink} from 'react-router-dom';

const Nav = () => {

    
    return (
        <div className="topnav">
            <NavLink activeClassName="active1" to="/home" exact>Home</NavLink>
            <NavLink activeClassName="active1" to="/timer">Timer</NavLink>
            <NavLink activeClassName="active1" to="/todo">Todo App</NavLink>
            <NavLink activeClassName="active1" to="/blog">Blog App</NavLink>
            <NavLink activeClassName="active1" to="/secret">Secret</NavLink>
        </div>
    );
}
export default Nav;