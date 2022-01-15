import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';

const  App = () => {
  let name = 'Daokieu';
  let number = 2021;
  let obj = {
      name: 'daokieu',
      chanel: 'abcfd'
  };
  let link = '';
  return (
    <div className="App">
      <Nav />

      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>Hello world width 88 { name }in ! </h1>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
