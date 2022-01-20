import './Nav.scss';


const Nav = () => {
    return (
        <div className="topnav">
            <a className="active" href="/home">Home</a>
            <a href="/timer">Timer</a>
            <a href="/todo">Todo App</a>
            <a href="/secret">Secret</a>
        </div>
    );
}
export default Nav;