import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';


const  App = () => {



  // const name = 'daokieu';
  let [name, setName] = useState('daokieu');
  const [address, setAddress] = useState('');
  const handleEventClick = (event) => {
    setName(address)
    console.log(">>>> click me", address)
  }
  const handleInput = (event) => {
    setAddress(event.target.value)
    console.log(event.target.value)
  }

  // re-render
  return (
    <div className="App">
      <Nav />

      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello world width 88 in { name } ! </h1>
          <input type="text" value={ address } onChange = { (event) => handleInput(event) } ></input>
        <button  type='button' onClick={ () => handleEventClick() }>Click me</button> 
        
      </header>
    </div>
  );
}

export default App;
